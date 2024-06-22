// src/components/TechnologySection.jsx
import React from 'react';

const TechnologySection = ({ values, handleChange, errors }) => (
  <div>
    <div>
      <label>Favorite Programming Language</label>
      <input type="text" name="favoriteLanguage" value={values.favoriteLanguage} onChange={handleChange} />
      {errors.favoriteLanguage && <p className="error">{errors.favoriteLanguage}</p>}
    </div>
    <div>
      <label>Years of Experience</label>
      <input type="number" name="yearsOfExperience" value={values.yearsOfExperience} onChange={handleChange} />
      {errors.yearsOfExperience && <p className="error">{errors.yearsOfExperience}</p>}
    </div>
  </div>
);

export default TechnologySection;
