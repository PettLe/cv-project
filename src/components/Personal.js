import React, { useState } from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

const Personal = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [[info], setInfo] = useState([
    {
      nameInfo: "",
      emailInfo: "",
      phoneInfo: "",
      ageInfo: "",
      id: "",
    },
  ]);

  const { personal, personalInfo, handleChange, onSubmitPersonal } = props;

  console.log(info.nameInfo);
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
                  id="infoName"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.nameInput}
                  value={info.nameInfo}
                />
              </li>
              <li>
                E-mail:{" "}
                <EditText
                  id="infoEmail"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.emailInput}
                  value={info.emailInfo}
                />
              </li>
              <li>
                Phone:{" "}
                <EditText
                  id="infoPhone"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.phoneInput}
                  value={info.phoneInfo}
                />
              </li>
              <li>
                Date of Birth:{" "}
                <EditText
                  type="date"
                  id="infoAge"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.ageInput}
                  value={info.ageInfo}
                />
              </li>
            </ul>
          );
        })}
        <hr />
      </div>
    </div>
  );
};

export default Personal;
