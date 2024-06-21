
import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {

  return (
    <>
       <div className='text-center bg-primary h-100'>
                <h1>ERROR 404</h1>
                <h1>PAGE NOT FOUND</h1>
                <h3>Please Go To</h3>
                <div>
                    <Link className='text-info fw-bolder fs-3' to='/'>Home</Link>
                    {/* <First /> */}
                </div>
            </div>
    </>
  )
}

export default Notfound
