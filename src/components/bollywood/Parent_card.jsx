import React from 'react';

import Cricket_card from './Bollywood_card';
function Parent_card() {

  var data = [
    {
      vid:"https://www.youtube.com/live/knBSFd8qVFE?feature=share",
      img:"/images/boll1.png",
      title:"Hindi New Song 2023 💖 Latest Bollywood Songs",
      avatar:"./images/boll1.png",
      channel:"Romantic Music",  
      views:"2.4M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/YxWlaYCA8MU",
      img:"/images/boll2.png",
      title:"Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika ",
      avatar:"./images/boll2.png",
      channel:"YRF",
      views:"180k Views",
      date:"6 month ago"
    },
    {
      vid:"https://youtu.be/ZqFCn4Nia4o",
      img:"/images/boll3.png",
      title:"THE LOVE MASHUP 2023 🧡💕💚 Best Mashup Arijit",
      avatar:"./images/boll3.png",
      channel:"Meet pratikh",
      views:"1M Views",
      date:"1 Year ago"
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
      vid:"https://youtu.be/X3M4TZ3RwWw",
      img:"/images/boll6.png",
      title:"90's Songs | Jukebox | Ishtar Music...",
      avatar:"./images/boll6.png",
      channel:"Ishtar music",
      views:"450k Views",
      date:"3 Year ago"
    },
    {
      vid:"https://youtu.be/PCCF9cfqTXs",
      img:"/images/boll7.png",
      title:"Mind Relax Lofi Mashup || Hindi Bollywood || Songs || ",
      avatar:"./images/boll7.png",
      channel:"Lofi song",
      views:"2M Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/jqpePNeAtNs",
      img:"/images/boll8.png",
      title:"Best of Arijit Singhs 2022 | Arijit Singh Hits Songs |",
      avatar:"./images/boll8.png",
      channel:" T-series",
      views:"20K Views",
      date:"15 Days ago"
    },
    {
      vid:"https://youtu.be/_z8UyrLlM7k",
      img:"/images/boll9.png",
      title:"Long Drive Mashup 4 | Non-Stop JukeBox | Jay Guldekar.",
      avatar:"./images/boll9.png",
      channel:"Jay",  
      views:"3M Views",
      date:"10 Year ago"
    },
    {
      vid:"https://youtu.be/hfqgj6WVDNA",
      img:"./images/boll10.png",
      title:"💕 2002 Best Romantic Songs | All Time Evergreen Bollywood",
      avatar:"/images/boll10.png",
      channel:"Love katta",
      views:"850k Views",
      date:"5 month ago"
    },

 
    {
      vid:"https://youtu.be/Kbxy-uvW4fc",
      img:"/images/boll11.png",
      title:"Travel Songs | Jukebox | Travel Mashup | Road Trip ",
      avatar:"./images/boll11.png",
      channel:"Rivansh Thakur",
      views:"2K Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/8jwP-FCaAAI",
      img:"/images/boll12.png",
      title:"Best Of Arijit Singh | Romantic Songs | Arijit Singh All Song",
      avatar:"./images/boll12.png",
      channel:"BS7",
      views:"55K Views",
      date:"10 Days ago"
    },
    {
      vid:"https://youtu.be/ubh8sbhNNOI",
      img:"/images/boll13.png",
      title:"Valentine Love Mashup | Non-Stop JukeBox |...",
      avatar:"./images/boll13.png",
      channel:"Jay",  
      views:"10.5k Views",
      date:"2 month ago"
    },
    {
      vid:"https://youtu.be/y6LbGfmQPkE",
      img:"./images/boll14.png",
      title:"Kumar Sanu | 90's Hit Songs | Old| Retro Hits🎵",
      avatar:"/images/boll14.png",
      channel:"hits",
      views:"9.57M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/AvkYe5wQ59E",
      img:"/images/boll15.png",
      title:"Old Vs New Bollywood Mashup 2023 |Superhits Romantic",
      avatar:"./images/boll15.png",
      channel:"new hindi",
      views:"22K Views",
      date:"5 month ago"
    },
    {
      vid:"https://youtu.be/B8uMYAFQbuU",
      img:"/images/boll16.png",
      title:"🎸🎸new hindi 2023💔❤️ dj mix 💗🎸 hindi love story.",
      avatar:"./images/boll16.png",
      channel:"DJ mix",
      views:"500K Views",
      date:"10 month ago"
    },
    
  ]
  return (
  <>
  <div className="row recomendedvideo">
  {
    data.map((item)=>{
        return(
          
            <Cricket_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
    </div>
           
  </>
  )
}

export default Parent_card
