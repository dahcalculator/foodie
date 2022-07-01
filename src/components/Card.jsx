import React from 'react'
import './App.css'

const card = () => {
  return (
    <div className='company'>
         <div className="compImg">
         <img src={require('../img/hotel.png')} alt="img" id='compImg' />
        </div>
        <div className="compDetail">
         <div className="compName">
           ZALLAX EATRY
         </div>
         <div className="detail">
           <div className="rate">
             Rating
           </div>
           <div className="star">
             ***
           </div>
         </div>
       </div>
    </div>
  )
}

export default card