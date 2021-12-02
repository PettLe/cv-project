import React, { useState } from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import uniqid from "uniqid";

const WorkHistory = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [[info], setInfo] = useState([
    {
      jobInfo: "",
      titleInfo: "",
      taskInfo: "",
      jobStartInfo: "",
      jobEndInfo: "",
      id: uniqid(),
    },
  ]);
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
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.companyInput}
                  value={info.jobInfo}
                />
              </li>
              <li>
                Position:{" "}
                <EditText
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.positionInput}
                  value={info.titleInfo}
                />
              </li>
              <li>
                Tasks:{" "}
                <EditText
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.taskInput}
                  value={info.taskInfo}
                />
              </li>
              <li>
                Start:{" "}
                <EditText
                  type="date"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.jobStartInput}
                  value={info.jobStartInfo}
                />
              </li>
              <li>
                End:{" "}
                <EditText
                  type="date"
                  onChange={setInfo}
                  style={{ color: "#000000" }}
                  placeholder={item.jobEndInput}
                  value={info.jobEndInfo}
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
