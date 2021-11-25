import React, { Component, setState } from "react";
import "./App.css";
//Import Components
import Personal from "./components/Personal";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>CV Project</h1>
        <Personal />
        <Education />
        <WorkHistory />
      </div>
    );
  }
}

export default App;
