import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    console.log(props.schoolInfo);
  }

  render() {
    const { onSubmitEducation, handleChangeEducation, school } = this.props;

    return (
      <div className="Education">
        <h2>Education section</h2>
        <form onSubmit={onSubmitEducation}>
          <label htmlFor="schoolInput">School: </label>
          <br />
          <input
            onChange={handleChangeEducation}
            type="text"
            name="schoolInput"
            value={school.schoolInput}
            aria-required
          />
          <br />
          <label htmlFor="degreeInput">Degree: </label>
          <br />
          <input
            onChange={handleChangeEducation}
            type="text"
            name="degreeInput"
            value={school.degreeInput}
            aria-required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Education;
