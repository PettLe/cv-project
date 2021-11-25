import React, { Component } from "react";
import "./App.css";
//Import Components
import Personal from "./components/Personal";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        nameInput: "",
        emailInput: "",
        phoneInput: "",
      },
      personalInfo: [],
    };
  }

  //CHANGE HANDLERS
  handleChange = (e) => {
    e.persist();

    let value = e.target.value;

    this.setState((prevState) => ({
      personal: { ...prevState, [e.target.name]: value },
    }));
    //const name = e.target.name;
    //const value = e.target.value;
    //   this.setState({
    //   personal: {
    // [name]: e.target.value,
    //   fullName: e.target.value,
    //   email: e.target.value,
    // phone: e.target.value,
    //},
    //});
    //   console.log(this.state.personal.fullName);
    //console.log(e.target.name);
  };

  render() {
    const { personal } = this.state;
    return (
      <div className="App">
        <h1>CV Project</h1>
        <div className="PerEd">
          <Personal
            personal={personal}
            handleChange={this.handleChange}
            handleChangeEmail={this.handleChangeEmail}
            handleChangePhone={this.handleChangePhone}
          />
          <Education />
        </div>
        <WorkHistory />
      </div>
    );
  }
}

export default App;
