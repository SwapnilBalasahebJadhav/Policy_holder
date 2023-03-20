import React from 'react'
import "./Library_card.css"


function Library_card(props) {
  return (
  <>
              <div className="col-6 col-md-4 col-lg-3 p-1">
              <a href={props.video} className="nav-link p-0">
                 <div className="card card_area_library p-0">
                   <div className="card-body p-0 ">
                   <img src={props.img} className="w-100 videocardimg"/>
                   <div className="bg-danger library_line">
                   </div>
                   </div>
                     <div className="card-footer p-0">
                     <p className=' text-white'>{props.title}</p>
                     <p className="vid_channel">{props.channel}</p>
                     <p className='vid_views float-left mr-3'>{props.views}</p>
                     <p className='vid_date'>{props.date}</p>
                     </div>
                     </div>
                     </a>
             </div>
           
          
        
  </>
  )
}

export default Library_card
