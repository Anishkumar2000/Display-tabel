import React from "react";
import table from "react-bootstrap";
import Employees from "./users";
import "./Home.css";

function Home() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>mobile_num</th>
          </tr>
        </thead>
        <tbody>
          {
            Employees.map((user) => {
              return(
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.mobile_num}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}
export default Home;

