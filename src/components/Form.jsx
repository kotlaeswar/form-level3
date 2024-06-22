// src/components/Form.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import TechnologySection from './TechnologySection';
import EducationSection from './EducationSection';
import HealthSection from './HealthSection';
import './Form.css';

const Form = ({ setFormData }) => {
  const navigate = useNavigate();
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = (values) => {
    const errors = {};
    if (!values.fullName) errors.fullName = 'Full Name is required';
    if (!values.email) errors.email = 'Email is required';
    if (!values.surveyTopic) errors.surveyTopic = 'Survey Topic is required';
    if (values.surveyTopic === 'Technology') {
      if (!values.favoriteLanguage) errors.favoriteLanguage = 'Favorite Language is required';
      if (!values.yearsOfExperience) errors.yearsOfExperience = 'Years of Experience is required';
    }
    if (values.surveyTopic === 'Health') {
      if (!values.exerciseFrequency) errors.exerciseFrequency = 'Exercise Frequency is required';
      if (!values.dietPreference) errors.dietPreference = 'Diet Preference is required';
    }
    if (values.surveyTopic === 'Education') {
      if (!values.highestQualification) errors.highestQualification = 'Highest Qualification is required';
      if (!values.fieldOfStudy) errors.fieldOfStudy = 'Field of Study is required';
    }
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: ''
  }, validateForm);

  useEffect(() => {
    const fetchQuestions = async (topic) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:3001/${topic}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const questions = await response.json();
        setAdditionalQuestions(questions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (values.surveyTopic) {
      fetchQuestions(values.surveyTopic);
    } else {
      setAdditionalQuestions([]);
    }
  }, [values.surveyTopic]);

  const onSubmit = () => {
    setFormData({ ...values, additionalQuestions });
    navigate('/summary');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <label>Full Name</label>
        <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Survey Topic</label>
        <select name="surveyTopic" value={values.surveyTopic} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
      </div>

      {values.surveyTopic === 'Technology' && (
        <TechnologySection values={values} handleChange={handleChange} errors={errors} />
      )}
      {values.surveyTopic === 'Health' && (
        <HealthSection values={values} handleChange={handleChange} errors={errors} />
      )}
      {values.surveyTopic === 'Education' && (
        <EducationSection values={values} handleChange={handleChange} errors={errors} />
      )}

      <div>
        <label>Feedback</label>
        <textarea name="feedback" value={values.feedback} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>

      {loading && <p>Loading additional questions...</p>}
      {error && <p>Error: {error}</p>}
      {additionalQuestions.length > 0 && (
        <div>
          {/* <h3>Additional Questions</h3>
          <ul>
            {additionalQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul> */}
        </div>
      )}
    </form>
  );
};

export default Form;
