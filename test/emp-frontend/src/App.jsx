import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const fetchEmployee = async () => {
    const res = await axios.get("http://localhost:5000/api/employee");
    if (res.data.status) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

  const fetchEmployeeByPagination = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/employee/pagination?count=3&page=" + count,
    );
    if (res.data.status) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    fetchEmployeeByPagination();
  }, [count]);
  return (
    <>
      {data.map((emp) => (
        <div>{emp.name}</div>
      ))}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Next
      </button>
    </>
  );
}

// Interview Task

// 1. CRUD + Filteration + Pagination (JSON SERVER - todo, ecom)
// 2. JWT Authentication + CRUD

// Json Web Token -->

// bcrypt - third party module - password hashing - password -->
// jwt - third party module - authorization setup

// jayesh --> @$#%^FYGV --> text
// encryption --> text --> un-understable characters
// decryption --> un-understable characters --> text
// bcryption --> text -> un-understable characters, no reverse option available

// wp --> hi --> database($%^&*) --> hi
// google/login --> password --> yes/no

// token --> login
// every api request

// protected routes

// authentication --> is to validate/verify/check user is valid or not.
// authorization --> is process to allow access of resources to the valid user.

// user based access control - ubac

// student --> phone, pin --> attendance, mark.
