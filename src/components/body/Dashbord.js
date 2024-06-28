import React from 'react'
import { useEffect, } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
// import AboutCard from "../about/AboutCard"
// import Hblog from "../blog/Blog"
// import HAbout from "../home/HAbout"
import Hero from '../home/hero/Hero'
// import Hprice from "./Hprice"
import Hprice from '../home/Hprice'
import Testimonal from '../home/testimonal/Testimonal'
// import Testimonal from "./testimonal/Testimonal"

const Dashbord = () => {
  const navigate = useNavigate()
  const endpoint3 = "http://localhost:5100/log/dashboard"
  let token = localStorage.token
  // const firstname = localStorage.firstname

  useEffect(() => {

    axios.get(endpoint3, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        if (err) {
          localStorage.removeItem("token")
          navigate("/student/login")
          console.log(err);
        }
      })
  }, [navigate, token])

  return (
    <>
      {/* <AboutCard /> */}
      {/* <Hblog /> */}
      {/* <HAbout /> */}
      <Hero />
      <Hprice />
      <Testimonal />
    </>
  )
}

export default Dashbord
