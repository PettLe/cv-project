import React, { Component } from "react";

class WorkHistory extends Component {
  constructor(props) {
    super(props);
    console.log(props.workInfo);
    this.state = {
      isActive: false,
    };
  }
  toggleDisplay = (e) => {
    this.setState(() => ({
      isActive: !this.state.isActive,
    }));
  };
  render() {
    const { onSubmitWork, handleChangeWork, work, workInfo } = this.props;

    return (
      <div className="WorkHistory">
        <h2>Work Experience</h2>
        <form
          className={this.state.isActive ? "hidden" : "workForm"}
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
          <button onClick={this.toggleDisplay} type="submit">
            Submit
          </button>
        </form>
        <div className={this.state.isActive ? "workData" : "hidden"}>
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
          <button onClick={this.toggleDisplay}>Add new</button>
        </div>
      </div>
    );
  }
}

export default WorkHistory;
