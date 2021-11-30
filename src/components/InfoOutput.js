import React, { Component, setState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

class InfoOutput extends Component {
  constructor(props) {
    super(props);
    console.log(props.workInfo);
  }

  render() {
    //if (!this.props.addressParts) return null;
    const {
      personalInfo,
      schoolInfo,
      workInfo,
      handleChange,
      onSubmitPersonal,
    } = this.props;

    return (
      <div className="infoData">
        <h2>Personal information</h2>
        <div className="perData">
          {personalInfo.map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  Name: <input className="notEdited" value={item.nameInput} />
                </li>
                <li>E-mail: {item.emailInput}</li>
                <li>Phone: {item.phoneInput}</li>
                <li>Date of Birth: {item.ageInput}</li>
              </ul>
            );
          })}
        </div>
        <div className="eduData">
          <h2>Education</h2>
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
        </div>
        <div className="workData">
          <h2>Past Work Experience</h2>
          {workInfo.map((item) => {
            return (
              <ul key={item.id}>
                <li>Company: {item.companyInput}</li>
                <li>Position: {item.positionInput}</li>
                <li>Tasks: {item.taskInput}</li>
                <li>Start: {item.jobStartInput}</li>
                <li>End: {item.jobEndInput}</li>
                <br />
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

/*        {workInfo.map((item) => {
          return (
            <ul key={item.id}>
              <li>Company: {item.companyInput}</li>
              <li>Position: {item.positionInput}</li>
              <li>Tasks: {item.taskInput}</li>
              <li>Start: {item.jobStartInput}</li>
              <li>End: {item.jobEndInput}</li>
              <br />
            </ul>
          );
        })} */

export default InfoOutput;
