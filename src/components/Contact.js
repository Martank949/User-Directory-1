import React, { Component } from "react";
import getRandomUser from "../utils/API";

class Contact extends Component {
  state = {
    employeeList: [],
  };

  componentDidMount() {
    getRandomUser().then((res) =>
      this.setState({ employeeList: res.data.results })
    );
  }

  render() {
    return (
      <>
        {this.state.employeeList.map((employee, index) => {
          return (
            <div className="mb-5" key={index}>
              <p>{employee.email}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Contact;
