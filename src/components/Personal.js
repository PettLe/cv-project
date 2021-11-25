import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { personal, handleChange } = this.props;

    return (
      <div className="Personal">
        <h2>Personal section</h2>
        <form>
          <label htmlFor="nameInput">Name: </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="nameInput"
            value={personal.fullName}
            aria-required
          />
          <br />
          <label htmlFor="emailInput">E-mail: </label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            name="emailInput"
            value={personal.email}
            aria-required
          />
          <br />
          <label htmlFor="phoneInput">Phone number: </label>
          <br />
          <input
            onChange={handleChange}
            type="tel"
            name="phoneInput"
            value={personal.phone}
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
