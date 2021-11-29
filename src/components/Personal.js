import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    console.log(props.personalInfo);
  }

  render() {
    const { personal, handleChange, onSubmitPersonal } = this.props;

    return (
      <div className="Personal">
        <h2>Personal information</h2>
        <form onSubmit={onSubmitPersonal}>
          <label htmlFor="nameInput">Name: </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="nameInput"
            value={personal.nameInput}
            aria-required
          />
          <br />
          <label htmlFor="emailInput">E-mail: </label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            name="emailInput"
            value={personal.emailInput}
            aria-required
          />
          <br />
          <label htmlFor="phoneInput">Phone number: </label>
          <br />
          <input
            onChange={handleChange}
            type="tel"
            name="phoneInput"
            value={personal.phoneInput}
            aria-required
          />
          <br />
          <label htmlFor="ageInput">Date of Birth: </label>
          <br />
          <input
            type="date"
            onChange={handleChange}
            name="ageInput"
            value={personal.ageInput}
            aria-required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Personal;
/* TOIMII JOS ON VALMIIKSI SISÄLTÖÄ
        <ul>
          <li>{personalInfo[0].personal.personal.nameInput}</li>
          <li>{personalInfo[0].personal.emailInput}</li>
          <li>{personalInfo[0].phoneInput}</li>
        </ul> */

/*
        <ul>
          {personalInfo.map((item) => {
            return <li key={item.id}>{item.nameInput}</li>;
          })}
        </ul>
         */
