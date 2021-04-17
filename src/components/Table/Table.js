import React from "react";
import Row from "../Row/Row";

function Table() {
  return (
    <table className="table">
      <p>The table will hold employee data in Rows!</p>
      <Row />
    </table>
  );
}

export default Table;
