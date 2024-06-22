// src/components/Form.js
import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import useFetch from '../hooks/useFetch';
import TechnologySection from './TechnologySection';
import HealthSection from './HealthSection';
import EducationSection from './EducationSection';
import Summary from './Summary';
import './Form.css';

const validate = (values) => {
  const errors = {};
  if (!values.fullName) errors.fullName = 'Full Name is required';
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.surveyTopic) errors.surveyTopic = 'Survey Topic is required';
  if (values.surveyTopic === 'Technology') {
    if (!values.favoriteLanguage) errors.favoriteLanguage = 'Favorite Programming Language is required';
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
  if (!values.feedback) {
    errors.feedback = 'Feedback is required';
  } else if (values.feedback.length < 50) {
    errors.feedback = 'Feedback must be at least 50 characters long';
  }
  return errors;
};

const Form = () => {
  const initialState = {
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  };

  const { values, errors, handleChange, handleSubmit } = useForm(initialState, validate);
  const [showSummary, setShowSummary] = useState(false);

  const { data: additionalQuestions, loading, error } = useFetch(
    values.surveyTopic ? `http://localhost:3001/${values.surveyTopic}` : null
  );

  const onSubmit = () => {
    setShowSummary(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={values.fullName} onChange={handleChange} className="input-field" />
          {errors.fullName && <p className="error-message">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={values.email} onChange={handleChange} className="input-field" />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Survey Topic</label>
          <select name="surveyTopic" value={values.surveyTopic} onChange={handleChange} className="select-field">
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p className="error-message">{errors.surveyTopic}</p>}
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
        <div className="form-group">
          <label>Feedback</label>
          <textarea name="feedback" value={values.feedback} onChange={handleChange} className="textarea-field" />
          {errors.feedback && <p className="error-message">{errors.feedback}</p>}
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
      {showSummary && (
        <Summary values={values} additionalQuestions={additionalQuestions} loading={loading} error={error} />
      )}
    </div>
  );
};

export default Form;
