// src/components/Summary.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import './Summary.css';

const Summary = ({ formData }) => {
  if (!formData) {
    return <Navigate to="/" />;
  }

  return (
    <div className="summary">
      <h2>Application Summary</h2>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Survey Topic:</strong> {formData.surveyTopic}</p>
      {formData.surveyTopic === 'Technology' && (
        <>
          <p><strong>Favorite Programming Language:</strong> {formData.favoriteLanguage}</p>
          <p><strong>Years of Experience:</strong> {formData.yearsOfExperience}</p>
        </>
      )}
      {formData.surveyTopic === 'Health' && (
        <>
          <p><strong>Exercise Frequency:</strong> {formData.exerciseFrequency}</p>
          <p><strong>Diet Preference:</strong> {formData.dietPreference}</p>
        </>
      )}
      {formData.surveyTopic === 'Education' && (
        <>
          <p><strong>Highest Qualification:</strong> {formData.highestQualification}</p>
          <p><strong>Field of Study:</strong> {formData.fieldOfStudy}</p>
        </>
      )}
      <p className='febbreak'><strong>Feedback:</strong> {formData.feedback}</p>

      <h3>Additional Questions</h3>
      {formData.additionalQuestions.length > 0 ? (
        <ul>
          {formData.additionalQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      ) : (
        <p>No additional questions</p>
      )}
    </div>
  );
};

export default Summary;
