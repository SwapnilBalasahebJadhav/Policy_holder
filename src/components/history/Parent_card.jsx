
import React from 'react';
import History_card from './History_card';
function Parent_card() {

  var data = [
    {
      vid:"https://youtu.be/K8gjSwc3Rlo",
      img:"/images/img7.png",
      title:"Function catching in python | python...",
      avatar:"./images/img7.png",
      channel:"Code with harry",
      views:"2M Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/SaWTn1ZNTpo",
      img:"/images/img8.png",
      title:"Frontend interview javascript | Interview...",
      avatar:"./images/img8.png",
      channel:"Suneja",
      views:"20K Views",
      date:"15 Days ago"
    },

    {
      vid:"https://youtu.be/tBmeblr67U0",
      img:"/images/js4.png",
      title:"Synchronous vs Asynchronous Programming in JavaScript ",
      avatar:"./images/js4.png",
      channel:"Thapa technical",
      views:"100k Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/0F-nudTm5EU",
      img:"/images/js5.png",
      title:"🔴 Node.JS Challenge #1: CRUD Operations using FS...",
      avatar:"./images/js5",
      channel:"Thapa technical",  
      views:"300K Views",
      date:"6 Year ago"
    },
    {
      vid:"https://youtu.be/G7gdEC4Nff4",
      img:"/images/boll4.png",
      title:"Mind Relax😌Lofi Mashup💞[slowed×reverb]😍 || ",
      avatar:"./images/boll4.png",
      channel:"YRF",
      views:"100k Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/huxhqphtDrM",
      img:"/images/boll5.png",
      title:"90's 80's Songs💗💗सदाबहार गाने 🌹Evergreen Songs...",
      avatar:"./images/boll5",
      channel:"Purane gane",  
      views:"300K Views",
      date:"6 Year ago"
    },
  
    {
      vid:"https://youtu.be/hKB-YGF14SY",
      img:"/images/react1.png",
      title:"React Tutorial in Hindi 🔥🔥",
      avatar:"./images/react1.png",
      channel:"codeWithharry",  
      views:"2.4M Views",
      date:"2 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/lI1ae4REbFM",
      img:"/images/react2.png",
      title:"10-Hour React MasterClass 2023 -",
      avatar:"./images/react2.png",
      channel:"Clever programmer",
      views:"180k Views",
      date:"6 month ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
   
    
  ]
  return (
  <>
  <div className="row recomendedvideo">
     <div className="col-12">
       <h5 className='text-white'>Watch history</h5>
       <br/>
       
       <h6 className='text-white'>Today</h6>
     </div>
       {
          data.map((item)=>{
              return(
                
                  <History_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date} desc={item.desc}/>
            
              )
          })
        }
  </div>
           
  </>
  )
}

export default Parent_card;
