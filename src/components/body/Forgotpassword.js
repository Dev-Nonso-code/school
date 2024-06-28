/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/Alluser";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import axios from "axios";
// import {
//   postingUser,
//   postingSuccessful,
//   postingFailed,
// } from "../../redux/AlluserSlice"
import { postingUser,
  postingSuccessful,
  postingFailed
 } from "../../Redux/AlluserSlice";
import { ToastContainer, toast } from "react-toastify";

const Forgotpassword = () => {
  const { isposting, postingsuccess, postingerror } = useSelector(
    (state) => state.AlluserSlice
  );
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false)
  const sendemail = async () => {
    setisloading(true)
    console.log(email);
  await  axios
      .post("http://localhost:5100/log/reset", { email: email })
      .then((res) => {
        setisloading(false)
        dispatch(postingSuccessful());
        localStorage.setItem("otp", JSON.stringify(res.data.OTP));
        toast.success(res.data.message)
        setTimeout(() => {
          navigate("/otp");
        }, 3000);
      })
      .catch((err) => {
        setisloading(false)
        console.log(err);
        dispatch(postingFailed(err.response.data.message));
        toast.error(err.response.data.message)
      });
    //  try {
    //  await forgotPassword(dispatch,email)
    //   if (postingsuccess) {

    //    navigate("/otp")
    //    console.log(res.data);
    //   }else{
    //     alert(postingerror)
    //   }
    //  } catch (error) {
    //    console.log(error);
    //    alert("An error occurred.");
    //  }
  };
  return (
    <>
      <div className="body">
        <div className="body2">
          <div className="iner-body">
            <div className="iner-body2">
              <div className="forg-cont">
                <h1 className="text-center fs-2 pt-3 fw-bold">
                  Forgotten Password?
                </h1>
                <p className="text-center fs-6">
                  Please enter your email so we can send you a verification code
                </p>
              </div>

              <form className="w-100 p-3  mx-auto text-center" action="">
                <div className="form-group d-flex m-auto">
                  {/* <label htmlFor="email">Email </label> */}
                  <div className="d-flex justify-content-center align-items-center m-auto email-cont">
                    {/* <CiMail/> */}
                    <IoMdMail size={25}/>
                    <input
                    className="px-2 form-control"
                      name="email"
                      onChange={(e) => setemail(e.target.value)}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="w-100  d-flex justiify-content-center align-items-center  mt-3">
                  <div
                    onClick={sendemail}
                    className="text-center m-auto btn btn-dark  mt-2 email-but"
                  >
                    {" "}
                    Send Email
                  </div>
                  <ToastContainer/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
