import React from "react";
import {Routes,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Detail from './components/Detail.jsx';
import Create from './components/Create.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<NavBar/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/create' element={<Create/>}/>
        <Route path='/home/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
