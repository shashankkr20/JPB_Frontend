import React, { useState } from 'react'
import Main from './Components/pages/Main';
import './App.css'
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
function App() {



  

  return (
<BrowserRouter>
<Routes>
  <Route path="*" element={<Main/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/main' element={<Main/>}/>
</Routes>
</BrowserRouter>


  );
}
// 1st
/* <div class="header">
  <div class="logo">Logo</div>
  <span class="contact">Contact</span>
</div>

<div class="container">
  <div class="description">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
  </div>
  <div class="signup-form">
    <h3>Sign up</h3>
    <form>
      <input type="text" placeholder="Name"/>
      <input type="tel" placeholder="Phone no."/>
      <input type="text" placeholder="Company Name"/>
      <button type="submit">Sign up</button>
    </form>
  </div>
</div> */

// 2nd






export default App