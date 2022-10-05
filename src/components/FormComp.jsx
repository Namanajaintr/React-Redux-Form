import React, { useState } from "react";
import { useDispatch } from "react-redux";

function FormComp({ setDisplay }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch({ type: "ADD", payload: data });
    setDisplay(true);
  };

  return (
    <div className="border border-dark">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputname1" className="form-label">
            name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputname1"
            onChange={handleChange}
            name="name"
            value={data.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={handleChange}
            name="email"
            value={data.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            name="password"
            value={data.password}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormComp;
