import React from 'react'
import './App.css'
import {MdMenu, MdSearch} from "react-icons/md";
import Card from './Card';



const Dashboard = () => {
  return (
    <div className='dashboard'>
     <nav>
       <ul className='nav'>
         <li> <div>Welcome</div></li>
         <li> <div><MdMenu /></div></li>
       </ul>
     </nav>
     <div className="searchDiv">
       <MdSearch />
       search
     </div>
     <div className="card">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
     </div>

    </div>
  )
}

export default Dashboard;


