import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
const Otp = () => {
  useEffect(() => {
   const otp2 = JSON.parse(localStorage.getItem("otp"))
   setOTP(otp2)

  }, [])
  const navigate = useNavigate()
  const [OTP, setOTP] = useState("");
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    // Update the input value in state
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
     
    // Focus on the next input if there's a value
    if (value !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

   const verify = () =>{
    const inputsString = inputs.join(''); 
    if (inputsString !== OTP) {
      toast.error("input do not match OTP")
    }else{
      navigate(`/reset/${inputsString}`)
    }
   }

  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center content">
       <div className="body2">
       <div className="iner-body">
          <div className="iner-body2 m-auto">
            <div className="forg-cont">
            <h1 className="text-center fw-bold">Enter OTP</h1>
            <p className="text-center fs-5 fw-light">
              Enter the 6 digit verification code that was sent to your email to
              change your password
            </p>
            </div>
            <div className="inp-div mt-4 text-center ml-5 container grid2">
              {inputRefs.map((ref, index) => (
                <input
                  key={index}
                  ref={ref} 
                  className="inp-field form-control w-25 m-2 text-center"
                  maxLength={1}
                  type="text"
                  value={inputs[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
            </div>
            <div className="w-100 mt-3 p-2 but2 m-auto text-center">
              <button onClick={verify} className="email-but">Verify</button>
              <ToastContainer/>
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Otp;
