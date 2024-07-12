import React, { useState, useEffect } from "react";
import Back from "../common/back/Back";
import "./contact.css";
import axios from "axios";


// import { useNavigate } from "react-router-dom"

const Contact = () => {
  //  let navigate = useNavigate()
  const [currentDate, setCurrentDate] = useState("");
  const [email, setemail] = useState("email");
  const [subject, setSubject] = useState("subject");
  const [name, setName] = useState("name");
  const [body, setBody] = useState("body");
  const [allvalues, setAllvalues] = useState([]);
  //  const date = New Date()
  // const endpoint = "https://backend-i6k6.onrender.com/admin/comment";
  const endpoint = "http://localhost:5100/admin/comment";
  useEffect(() => {
    // Update the date state to the current date
    const today = new Date();
    const date = today.toDateString(); // Format the date to a readable string
    setCurrentDate(date);
  }, []);
  const values = {
    email: email,
    subject: subject,
    name: name,
    body: body,
    currentDate: currentDate,
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("i'm coming");
    alert("message");
    axios
      .post(endpoint, values)
      .then((response) => {
        console.log(response.data);
       // alert("Login went throung");
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        // alert(values);
        alert(err);
         alert("not posted, try again");
       // alert(message);
      });
    setAllvalues([...allvalues, values]);
    console.log(allvalues);
    // console.log(values)
    localStorage.setItem("value", JSON.stringify(allvalues));
    // navigate("/student/post")
  };

  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title="Contact us" />
      
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe title="map" src={map} key={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form method="POST" typeof="submit">
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  autoComplete='name'
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete='email'
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                autoComplete='subject'
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                cols="30"
                rows="10"
                onChange={(e) => setBody(e.target.value)}
                name="body"
                autoComplete='body'
              >
                Create a message here...
              </textarea>
              <button onClick={submit} className="primary-btn">
                SEND MESSAGE
              </button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
