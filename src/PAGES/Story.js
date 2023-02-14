import React from 'react';
import './Home.css';
import {Link } from "react-router-dom";

function Story() {
  return (
    <div>

      <div className='home_header'>
          <div className='home_headerLeft'>
              <Link to="/about">About</Link>
              <Link to="/store">Store</Link>
          </div>
          <div className='home_headerRight'>
               <Link to="/gmail">Gmail</Link>
               <Link to="/images">Images</Link>
          </div>
      </div>
      <h1> this is search page and page is changed</h1>
      <div className='home_body'>

      </div>
    </div>
  )
}

export default Story;
