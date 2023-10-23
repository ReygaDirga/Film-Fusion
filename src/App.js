import ff from './img/ff.png';
import './App.css';
import Navbar from './component/navbar';
import Nowplaying from './component/nowplaying';
import Awal from './component/awal'
import Popular from './component/popular'
import Toprated from './component/toprated'
import Upcoming from './component/upcoming'
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
      <Navbar/>
        <Routes>
          <Route path='/' element={<Awal/>}/>
          <Route path='/nowplaying' element={<Nowplaying/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/toprated' element={<Toprated/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
