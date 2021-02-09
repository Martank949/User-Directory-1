import React, { Component } from "react";
import getRandomUser from "../utils/API";
import Button from "../components/Button";

class Name extends Component {
  state = {
    employeeList: [],
  };

  componentDidMount() {
    getRandomUser().then((res) =>
      this.setState({ employeeList: res.data.results })
    );
  }

  onSortByName = () => {
    const newState = { ...this.state };

    const employeeNames = newState.employeeList.map((emp) => {
      return emp.name.first;
    });

    employeeNames.sort();

    const sortedEmployees = employeeNames.map((emp) => {
      for (let i = 0; i < newState.employeeList.length; i++) {
        if (emp === newState.employeeList[i].name.first) {
          return newState.employeeList[i];
        }
      }
    });

    newState.employeeList = sortedEmployees;
    this.setState(newState);
  };

  render() {
    return (
      <>
        <Button onClick={this.onSortByName} name="Sort By Name" />

        {this.state.employeeList.map((employee, index) => {
          return (
            <div className="mb-5" key={index}>
              <p>{employee.name.first + " " + employee.name.last}</p>
              {/* <img
                src={employee.picture.large}
                alt={`${employee.name.first} profile picture`}
              /> */}
            </div>
          );
        })}
      </>
    );
  }
}

export default Name;
