import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Aboutus from './pages/aboutus';
import Home from './pages/home';
import Login from './pages/Login';
import Solutions from './pages/solutions';
import Fill from './pages/fill';
import Admin from './pages/admin'
import Registration from './pages/registration';
import ProjectDescription from './pages/ProjectDescription';
import Modal from './pages/Modal';


const App = () => {
  return (
 
   <BrowserRouter>
      <Routes>
        <Route>
           <Route path="/" element={<Home/>}/>
           <Route path="/aboutus" element={<Aboutus/>}/>
           <Route path="/solutions" element={<Solutions/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/fill" element={<Fill/>}/>
           <Route path="/admin" element={<Admin/>}/>
           <Route path="/registration" element={<Registration/>}/>   
           <Route path="/projectDescription" element={<ProjectDescription/>}/>
           <Route path="/modal" element={<Modal/>}/>
        </Route>      
      </Routes>
   </BrowserRouter>
  );
}

export default App;
