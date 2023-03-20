import React from 'react';
import Bg_video from './Bg_video';
import "./Bg_sport.css"
import Sport_card from './Sport_card';
import Sport_bottom from './Sport_bottom';
function Parent_card() {

  var data = [
    {
      vid:"https://youtu.be/XZNfxtAc_1M",
      img:"/images/sport1.png",
      title:"Kids vs. Pros: Leah Williamson Gets Grilled By Skye 😂",
      avatar:"./images/sport1.png",
      channel:"codeWithharry",  
      views:"2.4M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/pD72tn_F7Ts",
      img:"/images/sport3.png",
      title:"About Aussie Culture DAZN UEFA Women's Champions ",
      avatar:"./images/sport3.png",
      channel:"Clever programmer",
      views:"180k Views",
      date:"6 month ago"
    },
    {
      vid:"https://youtu.be/gr2RzupPPTg",
      img:"/images/sport4.png",
      title:"UEFA Women's Champions League",
      avatar:"./images/sport4.png",
      channel:"Thapa technical",
      views:"1M Views",
      date:"1 Year ago"
    },

  ]

  var bottom_data  =[
    {
      vid:"https://youtu.be/G7gdEC4Nff4",
      img:"/images/cricket4.png",
      title:"Stokes to leave ipl because enjery ✈️",
      avatar:"./images/cricket4.png",
      channel:"IPL katta",
      views:"100k Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/8S5lApwP3yo",
      img:"/images/cricket5.png",
      title:"Suryakumar yadav aceave good position in cricket...",
      avatar:"./images/cricket5",
      channel:"Anshika gupta",  
      views:"300K Views",
      date:"6 Year ago"
    },
    {
      vid:"https://youtu.be/izTczZ9_uCg",
      img:"/images/cricket16.png",
      title:"ipl csk ke liye bad news csk ki badhi tension...",
      avatar:"./images/cricket16.png",
      channel:"Suneja",
      views:"500K Views",
      date:"10 month ago"
    },
    
  ]
  return (
  <>
  <div className="row recomendedvideo">
      <Bg_video/>
  {
    data.map((item)=>{
        return(
          
            <Sport_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
   <div className="col-12">
    <div className="bg_video_border mt-3"></div>
    </div>

    {
    bottom_data.map((item)=>{
        return(
          
            <Sport_bottom video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
   <div className="col-12">
    <div className="bg_video_border mt-2 mb-4"></div>
    </div>
      </div>
           
  </>
  )
}

export default Parent_card;
