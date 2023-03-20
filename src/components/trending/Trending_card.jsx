import React from 'react'
import "./Trending_card.css"


function Trending_card(props) {
  return (
  <>
    <div className="col-12 mt-3">
       <div className="row">
        <div className="col-6 col-md-3 p-2">
        <a href={props.video} className="nav-link p-0">
          <div className="card card_area p-0">
            <div className="card-body p-0 ">
            <img src={props.img} className="w-100 videocard"/>
            </div>
          </div>
        </a>
        </div>
        <div className="col-6 col-md-7 p-2">
            <a href={props.video} className="nav-link p-0">
             <div className="card card_area mt-1 p-0">
              <div className="card-body p-0">
              <p className=' text-white'>{props.title}</p>
              <p className="vid_channel">{props.channel}</p>
              <p className='vid_views float-left mr-3'>{props.views}</p>
              <p className='vid_date'>{props.date}</p>
              <p className='vid_desc mt-1'>{props.desc}</p>
              </div>
             </div>
            </a>
        </div>
       </div>
    </div>
    
    
  </>
  )
}

export default Trending_card
