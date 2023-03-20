import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom';
import Account_modal from './Account_modal';
import Videocall_modal from './Videocall_modal';
import { useState } from 'react';

import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';

function Header() {
  const foc1=()=>{
    document.getElementById("search_inp").style.border="1px solid blue"
  }
  const blur1=()=>{
    document.getElementById("search_inp").style.border="1px solid rgb(58, 58, 58)"
  }
  const [show,setShow]=useState(false)
  const [showvideo,setShowvideo]=useState(false)
  return (
    <>
    
    <div className='container-fluid header text-white mb-3' style={{color:"white"}}>
      <div className="row">
      <div className="header_left col-3 d-flex mt-2 mb-2">
        <MenuIcon className=' sidebar_icon mt-1'/>
        <img className='header_logo ml-md-3 mt-1 ml-1' alt="" src='you white.png'/>
      </div>  

      <div className="header_input d-none  col-6 d-flex justify-content-center mt-2">
        <input  id="search_inp" type="text" placeholder='Search' onFocus={()=>foc1()} onBlur={()=>blur1()} className='pl-4'/>
        <div className='search_bg d-flex justify-content-center align-items-center'><SearchIcon/></div>
        <div className='mic_bg d-none d-md-inline justify-content-center align-items-center ml-3'><MicIcon className='ml-2 mt-2'/></div>
        
      </div>
      
      <div className="header_icons mb-2 col-3 d-flex justify-content-end mt-2">
        <VideoCallIcon className='mt-2 ml-2' onClick={()=>setShowvideo(true)}/>
        <NotificationsIcon className='mt-2 ml-2'/>
        <Avatar alt="swapnil" src="./images/11.jpg" onClick={()=>setShow(true)} className='ml-2'/>
        <Account_modal show={show} onClose={()=>setShow(false)}>

        </Account_modal>
        <Videocall_modal show1={showvideo} onClosevideo={()=>setShowvideo(false)}></Videocall_modal>
      </div>
      </div>
      <div className="row">
        <div className="col-2 float-left d-none d-md-inline">
        </div>
        <div className="col-12 col-md-10 second_nav">
          <ul className='d-flex p-0 '>
            <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink ml-3 ml-md-0" to="/">All</NavLink></li>
            <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink" to="/live">Live</NavLink></li>
            <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink" to="/frontend">Frontend</NavLink></li>
            <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink" to="/cricket">Cricket</NavLink></li>
            <li className='navoverflow1'><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/bollywood">Bollywood</NavLink></li>
            <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/js">JavaScript</NavLink></li>
            <li className='d-none d-sm-inline'><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/react">React</NavLink></li>
            <li className='navoverflow'><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/laptop">Laptops</NavLink></li>
            <li className='d-none d-md-inline'><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/cricket2">Sports</NavLink></li>
            <li className='d-none d-lg-inline'><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/music">Music</NavLink></li>
            <li className='d-none d-xl-inline'><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/program">Program</NavLink></li>
            <li className='d-none d-xl-inline'><NavLink style={({isActive})=>{return{backgroundColor:isActive ? "white":"#252525",color:isActive ? "black":"white"}}} className="navlink " to="/indiancricket">IndianCricket</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container pb-2 pt-2 d-sm-none bottom_nav">
      <div className="row ">
        <div className="col-2 p-1 text-center text-white bottom_nav_icon">
                  <NavLink to="/" className="text-white"><HomeIcon/></NavLink>
        </div>
        <div className="col-2 p-1 text-center text-white bottom_nav_icon">
                  <NavLink to="/trending" className="text-white"><WhatshotIcon/></NavLink>
        </div>
        <div className="col-2 p-1 text-center text-white bottom_nav_icon">
                  <NavLink to="/library" className="text-white"><VideoLibraryIcon/></NavLink>
        </div>
        <div className="col-2 p-1 text-center text-white bottom_nav_icon">
                  <NavLink to="/history" className="text-white"><HistoryIcon/></NavLink>
        </div>
        <div className="col-2 p-1 text-center text-white bottom_nav_icon">
                  <NavLink to="/sport" className="text-white"><EmojiEventsIcon/></NavLink>
        </div>
        <div className="col-2 p-1 text-center text-white bottom_nav_icon">
                  <NavLink to="#" className="text-white"><OndemandVideoIcon/></NavLink>
        </div>
      </div>
    </div>
   

    
    </>
  )
}

export default Header
