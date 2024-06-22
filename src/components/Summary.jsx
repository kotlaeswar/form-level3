// src/components/Summary.js
import React from 'react';

const Summary = ({ values, additionalQuestions, loading, error }) => (
  <div>
    <h2>Summary</h2>
    <p><strong>Full Name:</strong> {values.fullName}</p>
    <p><strong>Email:</strong> {values.email}</p>
    <p><strong>Survey Topic:</strong> {values.surveyTopic}</p>
    {values.surveyTopic === 'Technology' && (
      <>
        <p><strong>Favorite Programming Language:</strong> {values.favoriteLanguage}</p>
        <p><strong>Years of Experience:</strong> {values.yearsOfExperience}</p>
      </>
    )}
    {values.surveyTopic === 'Health' && (
      <>
        <p><strong>Exercise Frequency:</strong> {values.exerciseFrequency}</p>
        <p><strong>Diet Preference:</strong> {values.dietPreference}</p>
      </>
    )}
    {values.surveyTopic === 'Education' && (
      <>
        <p><strong>Highest Qualification:</strong> {values.highestQualification}</p>
        <p><strong>Field of Study:</strong> {values.fieldOfStudy}</p>
      </>
    )}
    <p><strong>Feedback:</strong> {values.feedback}</p>

    <h3>Additional Questions</h3>
    {loading && <p>Loading...</p>}
    {error && <p>Error fetching additional questions: {error.message}</p>}
    {additionalQuestions && (
      <ul>
        {additionalQuestions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    )}
  </div>
);

export default Summary;
