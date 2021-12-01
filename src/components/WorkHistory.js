import React, { Component, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const WorkHistory = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const { onSubmitWork, handleChangeWork, work, workInfo } = props;

  return (
    <div className="WorkHistory">
      <h2>Work Experience</h2>
      <form
        className={isActive ? "hidden" : "workForm"}
        onSubmit={onSubmitWork}
      >
        <label htmlFor="companyInput">Company: </label>
        <br />
        <input
          onChange={handleChangeWork}
          type="text"
          name="companyInput"
          value={work.companyInput}
          aria-required
        />
        <br />
        <label htmlFor="positionInput">Position: </label>
        <br />
        <input
          onChange={handleChangeWork}
          type="text"
          name="positionInput"
          value={work.positionInput}
          aria-required
        />
        <br />
        <label htmlFor="taskInput">Tasks: </label>
        <br />
        <input
          onChange={handleChangeWork}
          type="text"
          name="taskInput"
          value={work.taskInput}
          aria-required
        />
        <br />
        <label htmlFor="jobStartInput">Start: </label>
        <br />
        <input
          type="date"
          onChange={handleChangeWork}
          name="jobStartInput"
          value={work.jobStartInput}
          aria-required
        />
        <br />
        <label htmlFor="jobEndInput">End: </label>
        <br />
        <input
          type="date"
          onChange={handleChangeWork}
          name="jobEndInput"
          value={work.jobEndInput}
          aria-required
        />
        <br />
        <button onClick={() => setIsActive(!isActive)} type="submit">
          Submit
        </button>
      </form>
      <div className={isActive ? "workData" : "hidden"}>
        {workInfo.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                Company:{" "}
                <EditText
                  onChange={setText}
                  style={{ color: "#000000" }}
                  placeholder={item.companyInput}
                  value={text}
                />
              </li>
              <li>
                Position:{" "}
                <EditText
                  onChange={setText2}
                  style={{ color: "#000000" }}
                  placeholder={item.positionInput}
                  value={text2}
                />
              </li>
              <li>
                Tasks:{" "}
                <EditText
                  onChange={setText3}
                  style={{ color: "#000000" }}
                  placeholder={item.taskInput}
                  value={text3}
                />
              </li>
              <li>
                Start:{" "}
                <EditText
                  onChange={setText4}
                  style={{ color: "#000000" }}
                  placeholder={item.jobStartInput}
                  value={text4}
                />
              </li>
              <li>
                End:{" "}
                <EditText
                  onChange={setText5}
                  style={{ color: "#000000" }}
                  placeholder={item.jobEndInput}
                  value={text5}
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

export default WorkHistory;
