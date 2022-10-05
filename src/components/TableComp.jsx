import React from "react";
import { useSelector } from "react-redux";

const TableComp = () => {
  const storeData = useSelector((state) => state.reducerComp.personInfo);
  console.log("storeData:", storeData);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        {storeData.map((value) => {
          return (
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default TableComp;
