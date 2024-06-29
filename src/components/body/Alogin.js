
import React from 'react'

import { useState } from "react";
import axios from "axios";
import Back from '../common/back/Back';
// import { Nav } from "../Navbar component/Nav"

import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Alogin = () => {
    const [email, setusername] = useState("email");
    const [username, setemail] = useState("username");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");

    const values = {
        email: email,
        username: username,
        password: password,
    }
    const endpoint = "https://backend-i6k6.onrender.com/admin/login";
    let navigate = useNavigate()

    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                setmessage(response.data.message)
                if (response.data.status) {
                    localStorage.token = response.data.token
                    localStorage.firstname = response.data.firstname
                    localStorage.setItem('firstname', response.data.firstname);
                    navigate("/student/dashboard")
                }


            })
            .catch((err) => {
                console.log(err);
                // alert(values);
                alert(err);
                // alert("login faild");
                alert(message);

            }); if (message === false) {
                console.log(message);
                alert(message)
            } else {
            console.log(message);
        }

    };
  return (
    <all>
        <Back />
         <div id='all' className=" border border-2 
           border-primary box-shadow mt-2 text-center">
                <h2 className='text-info'>Login Here</h2>

                <div className={message === "" ? "" : "alert-alert-info"}>
                    <h3>
                        {message}
                    </h3>
                </div>

                <form method="POST" typeof="submit" >
                    <div className='form-group'>
                        <div id='input' className='mt-2'>

                            <input
                                // onBlur={formik.handleBlur}
                                onChange={(e) => setemail(e.target.value)}
                                type="text"
                                className="form-control w-50 m-2 m-auto"
                                placeholder="Email"
                            />
                            {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                        </div>

                        <div id='input' className='mt-2'>

                            <input
                                // onBlur={formik.handleBlur}
                                onChange={(e) => setusername(e.target.value)}
                                type="text"
                                className="form-control w-50 m-2 m-auto"
                                placeholder="username"
                            />
                            {/* {formik.touched.username && <small className="text-light">{formik.errors.username}</small>} */}
                        </div>

                        <div className='mt-3'>

                            <input
                                onChange={(e) => setpassword(e.target.value)}
                                type="password"
                                className="form-control w-50 m-auto"
                                placeholder="Password"
                            />


                        </div>

                        <button onClick={Login} className="btn btn-primary mt-2 w-25">
                            Login
                        </button>

                        <p className='mt-5 text-warning'>Don't have account with us, Signup
                            <strong><Link className='text-danger fw-bolder fs-3' to='/admin/signup'>Here</Link></strong> </p>
                    </div>
                </form>
                <h4>{message}</h4>

            </div>
    </all>
  )
}

export default Alogin