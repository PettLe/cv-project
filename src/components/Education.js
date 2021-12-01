import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    console.log(props.schoolInfo);
    this.state = {
      isActive: false,
    };
  }
  toggleDisplay = (e) => {
    this.setState(() => ({
      isActive: !this.state.isActive,
    }));
  };
  render() {
    const { onSubmitEducation, handleChangeEducation, school, schoolInfo } =
      this.props;

    return (
      <div className="Education">
        <h2>Education information</h2>
        <form
          className={this.state.isActive ? "hidden" : "educationForm"}
          onSubmit={onSubmitEducation}
        >
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
          <label htmlFor="startInput">Start: </label>
          <br />
          <input
            type="date"
            onChange={handleChangeEducation}
            name="startInput"
            value={school.startInput}
            aria-required
          />
          <br />
          <label htmlFor="endInput">End: </label>
          <br />
          <input
            type="date"
            onChange={handleChangeEducation}
            name="endInput"
            value={school.endInput}
            aria-required
          />
          <br />
          <button onClick={this.toggleDisplay} type="submit">
            Submit
          </button>
        </form>
        <div className={this.state.isActive ? "eduData" : "hidden"}>
          {schoolInfo.map((item) => {
            return (
              <ul key={item.id}>
                <li>School: {item.schoolInput}</li>
                <li>Degree: {item.degreeInput}</li>
                <li>Start: {item.startInput}</li>
                <li>End: {item.endInput}</li>
                <br />
              </ul>
            );
          })}
          <button onClick={this.toggleDisplay}>Add new</button>
        </div>
      </div>
    );
  }
}

export default Education;
