import React, { Component } from "react";
import axios from "axios";
import StyledP from "../styled-components.js/StyledP";

class Block extends Component {
  state = {
    students: [],
    block: undefined,
  };

  componentDidMount() {
    this.fetchStudents();
  }

  componentDidUpdate(prevprops, prevstate) {
    console.log(prevstate, this.state);
    if (prevstate.block !== this.state.block) {
      this.fetchStudents();
      console.dir("update");
    }
  }

  fetchStudents = () => {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students", {
        params: {
          block: this.state.block,
        },
      })
      .then((response) => {
        console.log(response);
        const { students } = response.data;
        console.log("fetching...");
        this.setState({
          students: students,
          // isLoading: false,
        });
      });
  };

  render() {
    return (
      <div>
        <StyledP>Sort Students by Block</StyledP>
        <form id="block_form">
          <label id="block_selector_label">
            Sort by block:
            <select
              id="block_selector_dropbox"
              value={this.state.block}
              onChange={this.handleChange}
            >
              <option value={undefined}>All</option>
              <option value="fun">Fundamentals</option>
              <option value="fe">Front-End</option>
              <option value="be">Back-End</option>
              <option value="proj">Projects</option>
              <option value="grad">Graduate</option>
            </select>
            <button>Sort!</button>
          </label>
        </form>
        <ul>
          {console.log("hoooot", this.state.students)}
          {this.state.students.map((student) => {
            console.log("loops");
            return (
              <li className="blockList" key={student._id}>
                Name: {student.name}
                Block: {student.currentBlock}
                Cohort: {student.startingCohort}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleChange = (event) => {
    console.log("hi");
    const { value } = event.target;
    console.dir(value);
    this.setState({
      block: value,
    });
  };

  // handleSubmitBlock = (event) => {
  //   event.preventDefault();
  // };
}

export default Block;
