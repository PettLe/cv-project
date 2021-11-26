import React from "react";

const InfoOutput = (props) => {
  const { personalInfo, schoolInfo } = props;

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
      </div>
    </div>
  );
};

export default InfoOutput;
