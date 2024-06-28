import React from "react"
import { team } from "../../dummydata"

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='bi bi-facebook icon'></i>
              <i className='bi bi-twitter icon'></i>
              <i className='bi bi-instagram icon'></i>
              <i className='bi bi-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
