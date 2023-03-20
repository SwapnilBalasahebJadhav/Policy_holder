import React from 'react'
import "./Sport_card.css"
import  Avatar  from '@material-ui/core/Avatar'


function Sport_bottom(props) {
  return (
  <>
    
     <div className="col-12 mt-4 col-lg-4 col-md-4 col-sm-6  p-0 p-2 border-0 mb-1 mt-1">
     <a href={props.video} className="nav-link p-0"><div className=" border-0 videocard_body card  p-0">
      <div className="card card_area">
      <div className=" border-0  card-body p-0">
       <img src={props.img} className="w-100  videocard_sport"/>
      </div> 
      <div className="card-footer text-white p-1 mt-1">
        <Avatar src={props.avatar} className="float-left"/>
         <p className='ml-5 vid_title'>{props.title}</p>
         <p className='ml-5 vid_channel'>{props.channel}</p>
         <p className='ml-5 vid_views float-left mr-3'>{props.views}</p>
         <p className='ml-1 vid_date'>{props.date}</p>
      </div>
      </div>
     </div></a>
     </div> 
    
  
    
    
    
    
  </>
  )
}

export default Sport_bottom
