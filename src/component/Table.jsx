import React from "react";

export const Table_Display = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>firstname</th>
            <th>age</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.firstname}</td>
              <td>{data.age}</td>
              <td>{data.amount || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
