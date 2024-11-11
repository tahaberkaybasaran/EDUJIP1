import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  // create a state which holds an object that involves students info
  const [values, setValues] = useState({
    tc: "",
    name: "",
    surname: "",
    schoolName: "",
    schoolNo: "",
  });

  const navigate = useNavigate();

  // const navigate = useNavigate();
  // execute submit
  const handleSubmit = (e) => {
    e.preventDefault(); // after submission refresh to default
    // creating a post request the data will be sent to the backend
    axios
      .post("http://localhost:5000/add_user", values) // sends student information to the server
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container d-flex justify-content-center border rounded bg-info">
      <div className="row ">
        <h3 className="text-center">Add Student</h3>
        <div>
          {/* <Link to="/" class="btn btn-success">
            Home
          </Link> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="TC" className="mt-3">
              TC kimlik no
            </label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                setValues({ ...values, tc: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="mt-3">
              Isim
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setValues({ ...values, name: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname" className="mt-3">
              Soyisim
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setValues({ ...values, surname: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="schoolName" className="mt-3">
              Okul Ismi
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setValues({ ...values, schoolName: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="schoolNo" className="mt-3">
              Okul Numarasi
            </label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                setValues({ ...values, schoolNo: e.target.value });
              }}
            />
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
