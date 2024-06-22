// src/components/TechnologySection.js
import React from 'react';

const TechnologySection = ({ values, handleChange, errors }) => (
  <div>
    <div>
      <label>Favorite Programming Language</label>
      <select name="favoriteLanguage" value={values.favoriteLanguage} onChange={handleChange}>
        <option value="">Select</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
      </select>
      {errors.favoriteLanguage && <p>{errors.favoriteLanguage}</p>}
    </div>
    <div>
      <label>Years of Experience</label>
      <input type="number" name="yearsOfExperience" value={values.yearsOfExperience} onChange={handleChange} />
      {errors.yearsOfExperience && <p>{errors.yearsOfExperience}</p>}
    </div>
  </div>
);

export default TechnologySection;
