import React from "react";
import "./Search.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function Search({
  handleNameSearch,
  handleMaleFilter,
  handleFemaleFilter,
  filterGender,
}) {
  return (
    <div className="search-container">
      <form className="search-form">
        <span className="search-span">
          <input
            className="search-bar"
            id="name-filter"
            onChange={handleNameSearch}
            placeholder="Search Employee Name"
            type="text"
          ></input>
        </span>

        {/* <DropdownButton
          className="genderFilter"
          id="dropdown-basic-button"
          title="Filter by"
        >
          <DropdownItem>Male</DropdownItem>
          <DropdownItem>Female</DropdownItem>
        </DropdownButton> */}

        <span className="filter-span">
          Filter by:{"  "}
          <input
            className="genderFilter"
            id="female-filter"
            name="gender"
            onChange={handleMaleFilter}
            type="radio"
            value="male"
          ></input>{" "}
          <label for="male"> Male</label>
          <input
            className="genderFilter"
            id="female-filter"
            name="gender"
            onChange={handleFemaleFilter}
            type="radio"
            value="female"
          ></input>{" "}
          <label for="female"> Female</label> {"  "}
          <button
            className="genderFilter"
            id="filter-btn"
            onClick={filterGender}
          >
            <i className="fas fa-filter"></i>
          </button>
        </span>
      </form>
    </div>
  );
}
