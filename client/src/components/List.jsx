import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => {
      setData(res.data);
      console.log(res);
      console.log(res.data);
    });
  }, []); //works once when component mount
  return (
    <div className="container-fluid bg-primary vh-100 vw-100">
      <h3>Student List</h3>
      <div>
        {data.map((student) => {
          return (
            <div key={student.id}>
              <h2>{student.tc}</h2>
              <h2>{student.ad}</h2>
              <h2>{student.soyad}</h2>
              <h2>{student.okul_adi}</h2>
              <h2>{student.okul_no}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
