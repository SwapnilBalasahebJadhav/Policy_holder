import React from 'react'
import "./Live_card.css"
import  Avatar  from '@material-ui/core/Avatar'
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';

function Live_card(props) {
  return (
  <>
    
    <div className="col-12 col-lg-3 col-md-4 col-sm-6  p-0 p-2 border-0 mb-1 mt-1">
     <a href={props.video} className="nav-link p-0"><div className=" border-0 videocard_body card  p-0">
      <div className="card card_area">
      <div className=" border-0  card-body p-0">
       <img src={props.img} className="w-100  videocard"/>
      </div>
      <div className="card-footer text-white p-1 mt-1">
        <Avatar src={props.avatar} className="float-left"/>
         <p className='ml-5 vid_title'>{props.title}</p>
         <p className='ml-5 vid_channel'>{props.channel}</p>
         <p className='ml-5 vid_views mr-3'>{props.views}</p>
         <div className='live_logo text-center d-flex ml-5'><WifiTetheringIcon className="live_icon"/><p>LIVE</p></div>
       
      </div>
      </div>
     </div></a>
     </div>
    
    
  
    
    
    
    
  </>
  )
}

export default Live_card
