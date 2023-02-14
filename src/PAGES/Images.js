import React from 'react';
import './Home.css';
import './search.css';
import {Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';



function Images() {
  return (
    <div>
      <div className='home_header'>
          <div className='home_headerLeft'>
              <Link to="/about">About</Link>
              <Link to="/story">story</Link>
          </div>
          <div className='home_headerRight'>
               <Link to="/gmail">Gmail</Link>
               <Link to="/images">Images</Link>
                <AppsIcon />
                <AccountCircleIcon />
          </div>
      </div>

      {/*this is the component part*/}
      {/*end her*/}
      <div className='home_body'>
      <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt="vvv" />
        <div className='home_inputContainer'>
          {/*this part is google logo */}
        </div>
      </div>
      <form className='search'>
        <div className='search_input'>
            <SearchIcon className='search_inputIcon' />
            <input />
            <MicIcon />
        </div>
        
        <div className='search_buttons'>
          <Button  variant='outlined'>GOOGLE Search</Button>
          <Button variant='outlined'>I'M Feeling Lucky</Button>
        </div>
      
    </form>
    {/*shifted above*/}
      {/*<div className='home_body'>
      <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt="vvv" />
  <div className='home_inputContainer'>
          
        </div>
  </div>*/}
<h1>this is images</h1>
    </div>
  )
}

export default Images