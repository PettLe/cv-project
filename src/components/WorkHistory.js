import React, { Component } from "react";

class WorkHistory extends Component {
  constructor(props) {
    super(props);
    console.log(props.workInfo);
  }

  render() {
    const { onSubmitWork, handleChangeWork, work } = this.props;

    return (
      <div className="WorkHistory">
        <h2>Work Experience Section</h2>
        <form onSubmit={onSubmitWork}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default WorkHistory;
