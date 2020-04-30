import React, { Component } from "react";
import axios from "axios";
import StyledP from "../styled-components.js/StyledP";

class AllStudents extends Component {
  state = {
    students: [],
    isLoading: true,
  };

  componentDidMount() {
    console.log("mounting...");
    this.fetchStudents();
  }

  fetchStudents = () => {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students")
      .then(({ data }) => {
        const { students } = data;
        console.log("fetching...");
        this.setState({
          students: students,
          isLoading: false,
        });
      });
  };

  render() {
    console.log(this.props);
    const { students, isLoading } = this.state;
    return (
      <div>
        <StyledP>All Students page</StyledP>
        {isLoading ? <StyledP>Loading...</StyledP> : null}
        <ul>
          {students.map(({ _id, name }) => {
            return (
              <li className="listItems" key={_id}>
                Name: {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllStudents;
