import ff from './img/ff.png';
import './App.css';
import Navbarr from './component/navbar';
import Nowplaying from './pages/nowplaying';
import Popular from './pages/popular';
import Toprated from './pages/toprated';
import Upcoming from './pages/upcoming';
import Home from './pages/home';
import Detail from './pages/detail';
import Footer from './component/footer';
import Notfound from './component/notfound'
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {

  return (
    <div className="App">
      <Helmet>
      <link rel="icon" href={ff} />
        <title>Film Fusion</title>
      </Helmet>
    <Router>
      <Navbarr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nowplaying' element={<Nowplaying/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/toprated' element={<Toprated/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
