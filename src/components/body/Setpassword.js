/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { useNavigate } from 'react-router-dom'


const Setpassword = () => {
  const navigate = useNavigate()

  const done = () =>{
    navigate("/student/login")
  }
  return (
    <>
        <div className='content d-flex justify-content-center align-items-center'>
           <div className='body2'>
           <div className='iner-body'>
                   <div className='iner-body2'>
                      <div className='forg-cont2'>
                          <div className='mar'>
                            <img src={require('../../components/good.webp')}/>
                          </div>
                      </div>
                     <div>
                       <h1 className='text-center fs-2 fw-bold mt-2'>Congratulations</h1>
                       <p className='text-center text-secondary fs-6'>Your password has been successfully changed</p>
                     </div>
                      <div className='w-100 p-3 d-flex justify-content-center align-items-center mt-2'>
                      <button onClick={done} className='btn btn-dark mx-auto email-but'>
                        Done
                      </button>
                      </div>
                   </div>
            </div>
           </div>
        </div>
    </>
  )
}

export default Setpassword