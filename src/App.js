import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Aboutus from './pages/aboutus';
import Home from './pages/home';
import Login from './pages/Login';
import Solutions from './pages/solutions';


const App = () => {
  return (
 
   <BrowserRouter>
      <Routes>
        <Route>
           <Route path="/" element={<Home/>}/>
           <Route path="/aboutus" element={<Aboutus/>}/>
           <Route path="/solutions" element={<Solutions/>}/>
           <Route path="/login" element={<Login/>}/>
           
        </Route>      
      </Routes>
   </BrowserRouter>
  );
}

export default App;
