import React, { Component } from "react";

class InfoOutput extends Component {
  constructor(props) {
    super(props);
    console.log(props.workInfo);
  }

  render() {
    //if (!this.props.addressParts) return null;
    const { personalInfo, schoolInfo, workInfo } = this.props;

    return (
      <div className="infoData">
        <h2>Here comes your... DATA!</h2>
        <div className="perData">
          {personalInfo.map((item) => {
            return (
              <ul key={item.id}>
                <li>Name: {item.nameInput}</li>
                <li>E-mail: {item.emailInput}</li>
                <li>Phone: {item.phoneInput}</li>
              </ul>
            );
          })}
        </div>
        <div className="eduData">
          <h2>Here comes the school stuff</h2>
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
          <h2>Oh you've already worked huh?</h2>
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
