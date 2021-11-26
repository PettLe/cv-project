import React from "react";

const InfoOutput = (props) => {
  const { personalInfo } = props;

  return (
    <div className="infoData">
      <h2>Here comes your... DATA!</h2>
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
  );
};

export default InfoOutput;
