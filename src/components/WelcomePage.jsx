import React from 'react'
import { MdTrendingFlat} from "react-icons/md";
import { Link } from 'react-router-dom';




const WelcomePage = () => {
  return (
      <div className='welcomePage'>
    <h1>logo</h1>
      <div> 
        <img className="img" src={require('../img/pic.png')} alt="" />
       </div>
       <div className='welcome'>Looking for where to buy food?
       </div>
      
       <Link to='/dashboard'>
       <div className='btn'>
         Get started
        <MdTrendingFlat/>
       </div>
       </Link>
       </div>
  )
}

export default WelcomePage