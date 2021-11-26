import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";

//Import Components
import Personal from "./components/Personal";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import InfoOutput from "./components/InfoOutput";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: [],
      personal: {
        nameInput: "",
        emailInput: "",
        phoneInput: "",
        id: uniqid(),
      },
      workInfo: [],
      work: {
        companyInput: "",
        positionInput: "",
        taskInput: "",
        jobStartInput: new Date(),
        jobEndInput: new Date(),
        id: uniqid(),
      },
      schoolInfo: [],
      school: {
        schoolInput: "",
        degreeInput: "",
        startInput: new Date(),
        endInput: new Date(),
        id: uniqid(),
      },
    };
  }

  //CHANGE HANDLERS
  //ChangeHandler for Personal
  handleChange = (e) => {
    e.persist();

    let value = e.target.value;

    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [e.target.name]: value,
        id: this.state.personal.id,
      },
    }));
    console.log(this.state.personal);
  };

  handleChangeEducation = (e) => {
    e.persist();

    let value = e.target.value;

    this.setState((prevState) => ({
      school: {
        ...prevState.school,
        [e.target.name]: value,
        id: this.state.school.id,
      },
    }));
  };

  handleChangeWork = (e) => {
    e.persist();

    let value = e.target.value;

    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        [e.target.name]: value,
        id: this.state.work.id,
      },
    }));
  };

  //SUBMIT HANDLERS
  //SubmitHandler for Personal
  onSubmitPersonal = (e) => {
    e.preventDefault();
    this.setState({
      personalInfo: this.state.personalInfo.concat(this.state.personal),
      personal: {
        nameInput: "",
        emailInput: "",
        phoneInput: "",
        id: uniqid(),
      },
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      schoolInfo: this.state.schoolInfo.concat(this.state.school),
      school: {
        schoolInput: "",
        degreeInput: "",
        startInput: new Date(),
        endInput: new Date(),
        id: uniqid(),
      },
    });
  };

  onSubmitWork = (e) => {
    e.preventDefault();
    this.setState({
      workInfo: this.state.workInfo.concat(this.state.work),
      work: {
        companyInput: "",
        positionInput: "",
        taskInput: "",
        jobStartInput: new Date(),
        jobEndInput: new Date(),
        id: uniqid(),
      },
    });
  };

  //FUNCTIONS

  test = () => {
    //  this.state.personalInfo.map((item) => {
    //    return console.log(item);
    //  });
    console.log(this.state.workInfo);
  };

  render() {
    const { workInfo, personal, personalInfo, schoolInfo, school, work } =
      this.state;
    return (
      <div className="App">
        <div className="formComponents">
          <h1>CV Project</h1>
          <div className="flexAll">
            <div className="formFlex">
              <div className="PerEd">
                <Personal
                  personal={personal}
                  personalInfo={personalInfo}
                  handleChange={this.handleChange}
                  onSubmitPersonal={this.onSubmitPersonal}
                />
                <Education
                  school={school}
                  schoolInfo={schoolInfo}
                  handleChangeEducation={this.handleChangeEducation}
                  onSubmitEducation={this.onSubmitEducation}
                />
              </div>
              <WorkHistory
                work={work}
                workInfo={workInfo}
                handleChangeWork={this.handleChangeWork}
                onSubmitWork={this.onSubmitWork}
              />
              <button onClick={this.test}>Print</button>
            </div>

            <div className="infoOutput">
              <InfoOutput
                personalInfo={personalInfo}
                schoolInfo={schoolInfo}
                workInfo={workInfo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
