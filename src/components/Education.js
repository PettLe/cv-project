import React, { useState } from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import uniqid from "uniqid";

const Education = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [[info], setInfo] = useState([
    {
      schoolInfo: "",
      degreeInfo: "",
      startInfo: "",
      endInfo: "",
      id: uniqid(),
    },
  ]);

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
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.schoolInput}
                  value={info.schoolInfo}
                />
              </li>
              <li>
                Degree:{" "}
                <EditText
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.degreeInput}
                  value={info.degreeInfo}
                />
              </li>
              <li>
                Start:{" "}
                <EditText
                  type="date"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.startInput}
                  value={info.startInfo}
                />
              </li>
              <li>
                End:{" "}
                <EditText
                  type="date"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.endInput}
                  value={info.startInfo}
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
