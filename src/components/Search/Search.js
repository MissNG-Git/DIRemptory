import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={props.handleFormSubmit}>
        <span className="search-span">
          <input
            className="search-bar"
            name="search"
            onChange={props.handleInputChange}
            placeholder="Search"
            type="search"
            value={props.value}
          />
        </span>
      </form>
    </div>
  );
}

export default Search;
