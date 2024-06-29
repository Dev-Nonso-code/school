/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { resetpassword } from "../../services/Alluser";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const Resetpassword = () => {
    const navigate = useNavigate()
    const [isloading, setisloading] = useState(false)
    const { inputsString } = useParams()
    // const opt = route
    // const { isposting, postingsuccess, postingerror } = useSelector(
    //   (state) => state.AlluserSlice
    // );
    const [c_password, setc_password] = useState("");
    const [showing, setshowing] = useState(false);
    const [Show, setshow] = useState(false);
    const [OTP, setOTP] = useState(inputsString);
    const [password, setpassword] = useState("");




    const reset = () => {
        setisloading(true)
        if (password !== c_password) {
            alert("password doesn't match")
        } else {
            let details = {
                OTP: OTP,
                password: password,
            };
            try {
                console.log(details)
                axios.post("https://backend-i6k6.onrender.com/log/change", details)
                    .then((res) => {
                        setisloading(false)
                        toast.success(res.data.message)
                        setTimeout(() => {
                            navigate("/set")
                        }, 3000);
                    }).catch((err) => {
                        setisloading(false)
                        toast.error(err.response.data.message)
                        console.log(err);
                    })

            } catch (error) {
                console.log(error);
                toast.error(error)
            }

        }

        // dispatch(resetpassword, details);
        // resetpassword(dispatch, details);
        // if (postingsuccess) {
        //   alert("you have sucessfully reset your password");
        // }
    };

    const show = () => {
        showing ? setshowing(false) : setshowing(true);
    };
    const showed = () => {
        Show ? setshow(false) : setshow(true);
    };
    return (
        <>
            <div className="d-flex justify-content-center align-items-center content">
                <div className="body2">
                    <div className="iner-body">
                        <div className="iner-body2">
                            <div className="forg-cont">
                                <h1 className="text-center fs-2">Create New Password</h1>
                                <p className="text-center fs-6 text-secondary">
                                    Fill the form below to create your new password
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">New Password</label>
                                <div className="d-flex justify-content-between align-items-center rounded-pill email-cont">
                                    <input
                                        onChange={(e) => setpassword(e.target.value)}
                                        className="form-control"
                                        type={Show ? "text" : "password"}
                                    />
                                    <button type="button" onClick={showed} className="eye">
                                        {Show ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="c_password">Confirm Password</label>
                                <div className="d-flex justify-content-between align-items-center rounded-pill email-cont">
                                    <input
                                        onChange={(e) => setc_password(e.target.value)}
                                        className="form-control"
                                        type={showing ? "text" : "password"}
                                    />
                                    <button type="button" onClick={show} className="eye">
                                        {showing ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                    <ToastContainer />
                                </div>
                            </div>
                            <div className="w-100  d-flex justiify-content-center align-items-center  mt-3">
                                <button
                                    className="text-center btn btn-dark  mt-2 email-but"
                                    onClick={reset}
                                >
                                    {isloading ? "Loading..." : "Update"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resetpassword;
