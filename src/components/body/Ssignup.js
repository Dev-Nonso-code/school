import React from 'react'
import axios from "axios";
// import { Nav } from "../Navbar component/Nav";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Ss.css"
// import Post from './Post';
// import Back from '../common/back/Back';

const Ssignup = () => {
    const [message, setmessage] = useState("");
    const [isloading, setisloading] = useState(false);
  
    const endpoint = "http://localhost:5100/log/signup";
    let navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
  
      onSubmit: (values) => {
        setisloading(true);
        // let url = "https://localhost:9990/users/signup";
        // let userDetails = {firstname, lastname, email, password}
        console.log(values);
        alert("account loading pleasse wait");
  
        axios
          .post(endpoint, values)
          .then((Response) => {
            setmessage(Response.data.message);
            console.log(Response.data);
            console.log(Response.data.message);
            setisloading(false);
            navigate("/dashboard");
          })
          .catch((errors) => {
            // const value = (Response.data)
            console.log(errors);
            setisloading(false);
            alert(errors);
            // alert(value)
            // console.log(value);
          });
      },
      validationSchema: yup.object({
        username: yup
          .string()
          .required("username is required")
          .min(5, "min 5 characters")
          .max(10, "max of 10 characters"),
        firstname: yup
          .string()
          .required("Firstname is required")
          .min(5, "min 5 characters")
          .max(10, "max of 10 characters"),
        //
        lastname: yup
          .string()
          .required("lastname is required")
          .min(5, "min 5 characters")
          .max(10, "max of 10 characters"),
  
        email: yup.string().required().email
        ("put vaild email addres"),
  
        password: yup
          .string()
          .required("password is required")
          .min(6, "min 6 characters")
          .max(10, "max of 10 characters")
          .uppercase(1, "musst have upercase")
          .lowercase(1, "must have lowercase"),
      }),
      // validate: (values) => {
      //   let errors = {}
      //   // condtion statement
  
      //   if (values.firstname === "") {
      //     errors.firstname = "This field is requird"
      //   }
      //   else if (values.firstname.length < 3) {
      //     errors.firstname = "Must be greater  than  3 alph"
      //   }
      //   if (values.password === "") {
      //     errors.password = "This passord is requird"
      //   }
      //   else if (values.password.length < 6) {
      //     errors.password = "Must be greater  than  6 alph"
      //   }
  
      //   if (values.email === "") {
      //     errors.email = "This email is requird"
      //   }
      //   else if (values.email.length < 10) {
      //     errors.email = "Must be greater  than  10 alph"
      //   }
  
      //   // return errors666666666666666666666666
  
      //   if (values.lastname === "") {
      //     errors.lastname = "This lastname is requird"
      //   }
      //   else if (values.lastname.length < 3) {
      //     errors.lastname = "Must be greater  than  3 alph"
      //   }
      //   return errors
      //   // console.log(errors);
  
      // }
    });

    return (
        <>
        {/* <div className='bg-info'>
            <Back />
        </div> */}
            <div
                id="alls"
                className="container-fluid border border-2 
      border-primary box-shadow mt-2"
            >
                <div className="text-center m-auto">
                    <div className="col-9 shadow-bg mx-auto ">
                        <div className={message === "" ? "" : "alert-alert-info"}>
                            {message}
                        </div>
                        {/* <div>{message}</div> */}
                        {/* <p className="alert alert-success">{message}</p> */}
                        <form onSubmit={formik.handleSubmit} type="submit" method="POST">
                            <h1 className="m-2 text-warning">Signh Up Here</h1>
                            <input
                                placeholder="email"
                                type="email"
                                className={
                                    formik.touched.email && formik.errors.email
                                        ? "my-2 form-control border-warning is-invalid"
                                        : "my-2 form-control"
                                }
                                autoComplete="email"
                                // required
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && (
                                <small className="text-light">{formik.errors.email}</small>
                            )}

                            <input
                                placeholder="username"
                                type="username"
                                className={
                                    formik.touched.username && formik.errors.username
                                        ? "my-2 form-control border-warning is-invalid"
                                        : "my-2 form-control"
                                }
                                autoComplete="usernmae"
                                // required
                                name="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.username && (
                                <small className="text-light">{formik.errors.username}</small>
                            )}

                            <input
                                placeholder="firstname"
                                type="text"
                                className={
                                    formik.touched.firstname && formik.errors.firstname
                                        ? "my-2 form-control border-danger is-invalid"
                                        : "my-2 form-control"
                                }
                                name="firstname"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.firstname && (
                                <small className="text-light">{formik.errors.firstname}</small>
                            )}
                            <input
                                placeholder="lastname"
                                type="text"
                                className={
                                    formik.touched.lastname && formik.errors.lastname
                                        ? "my-2 form-control border-info is-invalid"
                                        : "my-2 form-control"
                                }
                                // autoComplete="lastname"
                                // required
                                name="lastname"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.lastname && (
                                <small className="text-light">{formik.errors.lastname}</small>
                            )}
                            <input
                                placeholder="password"
                                type="password"
                                className={
                                    formik.touched.password && formik.errors.password
                                        ? "my-2 form-control is-invalid border-warning"
                                        : "my-2 form-control"
                                }
                                // autoComplete="current-password"
                                // required
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && (
                                <small className="text-light">{formik.errors.password}</small>
                            )}
                            <div>
                                <button type="submit" className="btn btn-warning w-50 p-3 my-2">
                                    {isloading ? "loading please wait" : "Sign Up"}
                                </button>
                                <p className="text-info">
                                    Already have account with us, Login{" "}
                                    <strong>
                                        <Link className="text-success fw-bolder fs-3" to="/student/Login">
                                            Here
                                        </Link>
                                    </strong>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ssignup
