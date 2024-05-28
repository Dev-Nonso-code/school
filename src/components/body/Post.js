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
