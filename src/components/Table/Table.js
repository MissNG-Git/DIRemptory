import React from "react";
import Row from "../Row/Row";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          {/* data-field = column field name */}
          {/* data-sortable = allows column sorting */}
          <th scope="col" data-field="column header" data-sortable="true">
            <span>Name</span>
          </th>
          <th scope="col">
            <span>Phone Number</span>
          </th>
          <th scope="col">
            <span>Email Address</span>
          </th>
          <th scope="col">
            <span>Date of Birth</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <Row />
      </tbody>
    </table>
  );
}

export default Table;
