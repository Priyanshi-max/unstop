import React from 'react';
import './Form.css';

const Form = ({ closeHandler }) => {
  return (
    <div className="form-container">
        <button className="close-button" onClick={closeHandler}>
        &times;
      </button>
      <h1>Create New Assessment</h1>
      <div className="form-group">
        <label htmlFor="assessment-name">Name of the Assessment</label>
        <input type="text" id="assessment-name" placeholder="Enter here" style={{color:"#1c4980"}} />
      </div>
      <div className="form-group">
        <label htmlFor="purpose">Purpose of the test is</label>
        <select name="purpose" id="purpose">
          <option value="option 1">Select</option>
          <option value="option 2">Option 2</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" placeholder="Enter description here"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="skills">Skills</label>
        <input type="text" id="skills" />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration of Assessment</label>
        <input type="text" id="duration" placeholder="HH:MM:SS" />
      </div>
      <button className='next'>Save</button>
    </div>
  );
};

export default Form;
