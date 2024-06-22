// src/components/EducationSection.jsx
import React from 'react';

const EducationSection = ({ values, handleChange, errors }) => (
  <div>
    <div>
      <label>Highest Qualification</label>
      <input type="text" name="highestQualification" value={values.highestQualification} onChange={handleChange} />
      {errors.highestQualification && <p className="error">{errors.highestQualification}</p>}
    </div>
    <div>
      <label>Field of Study</label>
      <input type="text" name="fieldOfStudy" value={values.fieldOfStudy} onChange={handleChange} />
      {errors.fieldOfStudy && <p className="error">{errors.fieldOfStudy}</p>}
    </div>
  </div>
);

export default EducationSection;
