<<<<<<< HEAD
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Clock from "../../Time";
// import Back from "../common/back/Back";

const Post = () => {
  const [val, setValues] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("value"));
    if (storedItems) {
      setValues(storedItems);
      console.log(storedItems);
    }
  }, []);

  return (
    <>
      <div className="m-auto text-center">
        <Clock />
      </div>
      <h2>Items from Local Storage</h2>
      <div className="bg-secondary mt-2 m-auto">
        <table className="table">
          <tr className="m-auto border border-4 border-info text-center">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Body</th>
            <th scope="col">Date</th>
          </tr>
          {val.map((item, index) => (
            <>
              {/* <div>
                <Back />
              </div> */}
              <tbody key={index}>
                <tr className="m-auto border border-4 border-info text-center">
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.subject}</td>
                  <td>{item.body}</td>
                  <td>{item.currentDate}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
};

export default Post;
=======
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Clock from "../../Time";
import axios from "axios";
// import Back from "../common/back/Back";

const Post = () => {
  const endpoint = "http://localhost:5100/admin/comments"
  const [val, setValues] = useState([]);
  //  const [message, setMessage] = useState([]);
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    axios.get(endpoint)
      .then((res) => {
        console.log(res);
        // setMessage(res.data)
        setisloading(true)
      }).catch((err) => {
        if (err) {
          console.log(err);
          // setisloading(false)
          // setisloading(false)
        }
      })
  }, [])
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("value"));
    if (storedItems) {
      setValues(storedItems);
      console.log(storedItems);
      setisloading(true)
    }
  }, []);


  return (
    <>
      <div className="m-auto text-center">
        <Clock />
      </div>
      <h2>Items from Local Storage</h2>
      <div className="bg-secondary mt-2 m-auto">
        <table className="table">
          <tr className="m-auto border border-4 border-info text-center">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Body</th>
            <th scope="col">Date</th>
          </tr>
          {! isloading ? <h1>Loading...</h1> : val.map((item, index) => (
            <>
              {/* <div>
                <Back />
              </div> */}
              <tbody key={index}>
                <tr className="m-auto border border-4 border-info text-center">
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.subject}</td>
                  <td>{item.body}</td>
                  <td>{item.currentDate}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
};

export default Post;
>>>>>>> ad1c1a62ed7c8251f12686397b006ca55a59a9c5
