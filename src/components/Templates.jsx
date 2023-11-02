import React from "react";

const Templates = ({ tableData}) => {
  return (
    <table style={{ width: "80%",margin:"10px 70px" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Template Name</th>
          <th>Title</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((tableRow, index) => {
          return (
            <tr
              key={index}
              style={{ cursor: "pointer" }}
              className="template-table-row"
            >
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>{tableRow.templateName}</td>
              <td>{tableRow.title}</td>
              <td>{tableRow.message}</td>
              <td>{tableRow.action}</td>
              <td>
                <img height="100"/>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Templates;
