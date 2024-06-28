/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

import React from 'react'

import { useState } from "react";
import axios from "axios";
// import { Nav } from "../Navbar component/Nav"
import './Sl.css'
import { useNavigate, Link } from "react-router-dom"
// import Back from '../common/back/Back';
// import { loguser } from "../services/Alluser";
import { saveLinkBeforeLogin } from '../../Redux/Checkall'
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import {
    postingSuccessful,
    postingFailed,
    postingUser,
} from "../../Redux/AlluserSlice";
import AlluserSlice from "../../Redux/AlluserSlice";

const Slogin = () => {
    const [email, setemail] = useState("email");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");
    const [showing, setshowing] = useState(false);
    const { isposting, postingsuccess, postingerror } = useSelector(
        (state) => state.AlluserSlice
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { alluser } = useSelector((state) => state.AlluserSlice);

    const { thriftlink } = useSelector((state) => state.joinslice)
    console.log(thriftlink);
    const values = {
        email: email,
        password: password,
    }
    const show = () => {
        showing ? setshowing(false) : setshowing(true);
      };
    const endpoint = "http://localhost:5100/log/signin";
    // let navigate = useNavigate()

    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        dispatch(postingUser())
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                dispatch(postingSuccessful(response.data.message));
                localStorage.setItem("token", response.data.token);
                toast.success(response.data.message)
                setmessage(response.data.message)
                if (thriftlink === null) {
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, [500000])
                } else {
                    dispatch(saveLinkBeforeLogin(null)); // Clear saved link
                    navigate(thriftlink);
                }
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
                dispatch(postingFailed(err.response.data.message))
                toast.error(err.response.data.message)

            }); if (message === false) {
                console.log(message);
                alert(message)
            } else {
            console.log(message);
        }

    };
    return (
        <>
            {/* <div className='bg-primary'>
            <Back />
        </div> */}
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
                                autoComplete='email'
                                name='email'
                                className="form-control w-50 m-2 m-auto"
                                placeholder="Email"
                            />
                            {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                        </div>

                        <div className='mt-3 d-flexz' id='eyes'>

                            <input
                                onChange={(e) => setpassword(e.target.value)}
                                type="password"
                                className="form-control w-50 m-auto"
                                placeholder="Password"
                                autoComplete='password'
                            />
                            <button type="button" onClick={show} className="eye border" id='eye'>
                                {showing ? <FaEye /> : <FaEyeSlash />}
                            </button>
                            <ToastContainer />


                        </div>
                        <p className="text-center"> <Link className="pass" to="/forgot" >Forgot Password ?</Link></p>

                        <button onClick={Login} className="btn btn-primary mt-2 w-25">
                            Login
                        </button>

                        <p className='mt-5 text-warning'>Don't have account with us, Signup
                            <strong><Link className='text-danger fw-bolder fs-3' to='/student/signup'>Here</Link></strong> </p>
                    </div>
                </form>
                <h4>{message}</h4>

            </div>
        </>
    )
}
export default Slogin