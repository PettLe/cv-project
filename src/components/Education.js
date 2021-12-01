import React, { Component, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const Education = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  const { onSubmitEducation, handleChangeEducation, school, schoolInfo } =
    props;

  return (
    <div className="Education">
      <h2>Education information</h2>
      <form
        className={isActive ? "hidden" : "educationForm"}
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
        <button onClick={() => setIsActive(!isActive)} type="submit">
          Submit
        </button>
      </form>
      <div className={isActive ? "eduData" : "hidden"}>
        {schoolInfo.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                School:{" "}
                <EditText
                  onChange={setText}
                  style={{ color: "#000000" }}
                  placeholder={item.schoolInput}
                  value={text}
                />
              </li>
              <li>
                Degree:{" "}
                <EditText
                  onChange={setText2}
                  style={{ color: "#000000" }}
                  placeholder={item.degreeInput}
                  value={text2}
                />
              </li>
              <li>
                Start:{" "}
                <EditText
                  onChange={setText3}
                  style={{ color: "#000000" }}
                  placeholder={item.startInput}
                  value={text3}
                />
              </li>
              <li>
                End:{" "}
                <EditText
                  onChange={setText4}
                  style={{ color: "#000000" }}
                  placeholder={item.endInput}
                  value={text4}
                />
              </li>
              <br />
            </ul>
          );
        })}
        <button onClick={() => setIsActive(!isActive)}>Add new</button>
        <hr />
      </div>
    </div>
  );
};

export default Education;
