import axios from "axios";

import {
    FetchingUser,
    FetchingSuccessful,
    FetchingFailed,
    postingUser,
    postingSuccessful,
    postingFailed,
} from  '../Redux/AlluserSlice'

export const loguser = (dispatch, value) =>{
    return new Promise((resolve, reject)=>{
         try {
            dispatch(postingUser())
            axios.post("https://ajo-backend.onrender.com/user/login", value).then((res)=>{
                dispatch(postingSuccessful(res.data))
                console.log(res.data);
                resolve()
            }).catch((err)=>{
                dispatch(postingFailed(err.message))
                console.log(err.message);
                reject()
            })
        } catch (error) {
            console.log(error);
        }
    })
  
}


export const postuser = (dispatch, data) =>{
    dispatch(postingUser())
    try {
     axios.post("https://ajo-backend.onrender.com/user/signup", data).then((res)=>{
        dispatch(postingSuccessful("created successfully"))
        console.log(res.data);
        alert("Posting Successful")
    }).catch((err)=>{
        dispatch(postingFailed(err.message))
        console.log(err.message);
    })
    } catch (error) {
       console.log(error)
    }
}

export const verifyuser = (dispatch) =>{
    dispatch(FetchingUser())
    const token = localStorage.getItem("token");
        try {
            axios.get("https://ajo-backend.onrender.com/user/verify",
                {
                    headers:{
                        "Authorization": `bearer ${token}`
                    }
                }).then((res)=>{
                    console.log(res.data);
                    dispatch(FetchingSuccessful(res.data))
                }).catch((err)=>{
                    console.log(err);
                    const errormessage = err?.response?.data?.message
                    dispatch(FetchingFailed(errormessage))
                })
        } catch (error) {
            console.log(error);
            dispatch(FetchingFailed(error.message))
        }
}
export const verifypaymemt = (dispatch, data) =>{
    dispatch(postingUser())
    const token = localStorage.getItem("token");
    try {
        axios.post("https://ajo-backend.onrender.com/user/pay", data,{
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }).then((res) => {
          dispatch(postingSuccessful("Payment verification successful"));
          console.log(res.data);
          alert("Payment Verification Successful");
        }).catch((err) => {
            const errormessage = err?.response?.data?.message
          dispatch(postingFailed(errormessage));
          console.log(err.message);
        });
      } catch (error) {
        console.log(error);
      }
}
 
export const createThrift = (dispatch, value, token) =>{
    console.log(token, 40)
    console.log(value, 45)
      dispatch(postingUser())
    //   const token = localstorage.getItem("token");
    try {
       axios.post("https://ajo-backend.onrender.com/user/contribution", value,{
        headers:{
            Authorization: `bearer ${token}`
        }
       }).then((res)=>{
        dispatch(postingSuccessful("created thrift successfully"));
        console.log(res.data);
        alert("payment Verification Successful");
       }).catch((err)=>{
        const errormessage = err?.response?.data?.message
        dispatch(postingFailed(errormessage))
        console.log(err);
       })
    } catch (error) {
       console.log(error); 
    }
}
 export const getThrift = (dispatch) =>{
    dispatch(FetchingUser())
    try {
       axios.get(`https://ajo-backend.onrender.com/user/contribution`) 
       .then((res)=>{
        dispatch(FetchingSuccessful("thrift fetched successfully"))
        console.log(res.data);
       }).catch((err)=>{
        console.log(err);
       })
    } catch (error) {
        console.log(error);
    }
 }

 export const forgotPassword = (dispatch, email) =>{
    dispatch(postingUser())
    try {
        console.log(email, 45)
       axios.post('https://ajo-backend.onrender.com/user/reset', {email:email},) 
       .then((res)=>{
        dispatch(postingSuccessful("post email successfully"))
        console.log(res.data);
       }).catch((err)=>{
        const errormessage = err?.response?.data?.message
        dispatch(postingFailed(errormessage))
       })
    } catch (error) {
        console.log(error);
    }
 }

 export const resetpassword = (dispatch, details) =>{
    dispatch(postingUser())
    try {
        console.log(details, 45)
       axios.post('https://ajo-backend.onrender.com/user/change', details,) 
       .then((res)=>{
        dispatch(postingSuccessful("password reset successful"))
        console.log(res.data);
       }).catch((err)=>{
        const errormessage = err?.response?.data?.message
        dispatch(postingFailed(errormessage))
       })
    } catch (error) {
        const errormessage = error?.response?.data?.message
        dispatch(postingFailed(errormessage))
    }
 }

