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

  test = () => {
    //  this.state.personalInfo.map((item) => {
    //    return console.log(item);
    //  });
    console.log(this.state.personalInfo);
  };

  render() {
    const { personal, personalInfo } = this.state;
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
                <Education />
              </div>
              <WorkHistory />
              <button onClick={this.test}>Print</button>
            </div>

            <div className="infoOutput">
              <InfoOutput personalInfo={personalInfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
