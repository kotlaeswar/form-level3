// src/components/EducationSection.js
import React from 'react';

const EducationSection = ({ values, handleChange, errors }) => (
  <div>
    <div>
      <label>Highest Qualification</label>
      <select name="highestQualification" value={values.highestQualification} onChange={handleChange}>
        <option value="">Select</option>
        <option value="High School">High School</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>
      </select>
      {errors.highestQualification && <p>{errors.highestQualification}</p>}
    </div>
    <div>
      <label>Field of Study</label>
      <input type="text" name="fieldOfStudy" value={values.fieldOfStudy} onChange={handleChange} />
      {errors.fieldOfStudy && <p>{errors.fieldOfStudy}</p>}
    </div>
  </div>
);

export default EducationSection;
