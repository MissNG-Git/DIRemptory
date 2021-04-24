import React, { Component } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
import API from "../../utils/API";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
    order: "",
  };

  // initialize app to display employee api on page
  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  // sets state of search/filter as input changes
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // API.getEmployees(this.state.search)
    //   .then((res) => {
    //     this.setState({
    //       employees: res.data.results,
    //       filterEmployees: res.data.results,
    //     });
    //   })
    //   .catch((err) => this.setState({ error: err.results }));
  };

  // perform search/filter as input changes
  filterEmployees = (input) => {
    if (input) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            // search by first name
            employee.name.first
              .toLowerCase()
              // or last name
              .concat(" ", employee.name.last.toLowerCase())
              // search will filter with what matches user input
              .includes(input) ||
            // search by phone
            employee.phone.includes(input) ||
            // replace word character & whitespace, global-matched & case-sensitive
            employee.phone.replace(/[^\w\s]/gi, "").includes(input) ||
            // search by email
            employee.email.includes(input)
            // this.formatDate(employee.dob.date).includes(input)
          );
        }),
      });
    } else {
      this.setState({ filteredEmployees: this.state.employees });
    }
  };

  render() {
    return (
      <div className="container">
        <p>I'm a container!</p>
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table
          state={this.state}
          sortBy={this.sortBy}
          filterEmployees={this.filterEmployees}
          // formatDate={this.formatDate}
        />
      </div>
    );
  }
}

export default Container;
