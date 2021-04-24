import React from "react";
// import Moment from "moment";

function Row(props) {
  let filteredEmployees = props.employees.filterEmployees;
  // let formatDob = Moment().format("LL");
  console.log(filteredEmployees);
  // console.log(formatDob);

  return (
    <tbody>
      {filteredEmployees.map((employee) => (
        <tr key={employee.id.value}>
          <td>
            <img src={employee.picture.medium} alt={employee.name.first} />
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{employee.dob.date}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Row;
