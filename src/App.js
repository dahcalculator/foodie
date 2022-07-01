
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Dashboard from './components/Dashboard';

function App() {
  return ( 


      <div className="App">
      
       <Routes>      
         <Route path='/' element={<WelcomePage />} />
         <Route path='/dashboard' element={<Dashboard />} />
       </Routes>

       </div>
       

  );
}

export default App;
