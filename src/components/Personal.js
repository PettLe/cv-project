import React, { Component, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const Personal = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const { personal, personalInfo, handleChange, onSubmitPersonal } = props;

  return (
    <div className="Personal">
      <h2>Personal information</h2>
      <form
        className={isActive ? "hidden" : "personalForm"}
        onSubmit={onSubmitPersonal}
      >
        <label htmlFor="nameInput">Name: </label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="nameInput"
          value={personal.nameInput}
          aria-required
        />
        <br />
        <label htmlFor="emailInput">E-mail: </label>
        <br />
        <input
          onChange={handleChange}
          type="email"
          name="emailInput"
          value={personal.emailInput}
          aria-required
        />
        <br />
        <label htmlFor="phoneInput">Phone number: </label>
        <br />
        <input
          onChange={handleChange}
          type="tel"
          name="phoneInput"
          value={personal.phoneInput}
          aria-required
        />
        <br />
        <label htmlFor="ageInput">Date of Birth: </label>
        <br />
        <input
          type="date"
          onChange={handleChange}
          name="ageInput"
          value={personal.ageInput}
          aria-required
        />
        <br />
        <button onClick={() => setIsActive(!isActive)} type="submit">
          Submit
        </button>
      </form>
      <div className={isActive ? "perData" : "hidden"}>
        {personalInfo.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                Name:{" "}
                <EditText
                  onChange={setText}
                  style={{ color: "#000000" }}
                  placeholder={item.nameInput}
                  value={text}
                />
              </li>
              <li>E-mail: {item.emailInput}</li>
              <li>Phone: {item.phoneInput}</li>
              <li>Date of Birth: {item.ageInput}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Personal;

/* <button onClick={this.toggleDisplay}>Edit</button> */
/* TOIMII JOS ON VALMIIKSI SISÄLTÖÄ
        <ul>
          <li>{personalInfo[0].personal.personal.nameInput}</li>
          <li>{personalInfo[0].personal.emailInput}</li>
          <li>{personalInfo[0].phoneInput}</li>
        </ul> */

/*
        <ul>
          {personalInfo.map((item) => {
            return <li key={item.id}>{item.nameInput}</li>;
          })}
        </ul>
         */
