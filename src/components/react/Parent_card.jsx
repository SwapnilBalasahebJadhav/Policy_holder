import React from 'react';

import React_card from './React_card';
function Parent_card() {

  var data = [
    {
      vid:"https://youtu.be/hKB-YGF14SY",
      img:"/images/react1.png",
      title:"React Tutorial in Hindi 🔥🔥",
      avatar:"./images/react1.png",
      channel:"codeWithharry",  
      views:"2.4M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/lI1ae4REbFM",
      img:"/images/react2.png",
      title:"10-Hour React MasterClass 2023 -",
      avatar:"./images/react2.png",
      channel:"Clever programmer",
      views:"180k Views",
      date:"6 month ago"
    },
    {
      vid:"https://youtu.be/KGkiIBTq0y0",
      img:"/images/react3.png",
      title:"React.js Full Course in Hindi for Beginners",
      avatar:"./images/react3.png",
      channel:"Thapa technical",
      views:"1M Views",
      date:"1 Year ago"
    },
    {
      vid:"https://youtu.be/tBmeblr67U0",
      img:"/images/react4.png",
      title:"🎯 React Tutorial in Hindi for Beginners ",
      avatar:"./images/react4.png",
      channel:"Thapa technical",
      views:"100k Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/0F-nudTm5EU",
      img:"/images/react5.png",
      title:"🔴 Complete React JS Tutorial in Hindi...",
      avatar:"./images/react5",
      channel:"Thapa technical",  
      views:"300K Views",
      date:"6 Year ago"
    },
    {
      vid:"https://youtu.be/gv-K_PlpGT8",
      img:"/images/react6.png",
      title:"ASMR | Build Disney+ with React JS...",
      avatar:"./images/react6.png",
      channel:"hindi tech",
      views:"450k Views",
      date:"3 Year ago"
    },
    {
      vid:"https://youtu.be/hQ9_27otvCo",
      img:"/images/react7.png",
      title:"30+ JavaScript Projects💥 | JavaScript Projects ",
      avatar:"./images/react7.png",
      channel:"WsCubeTech",
      views:"2M Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/sHafwsBoeQ4",
      img:"/images/react8.png",
      title:"ReactJS Tutorial for Beginners - Full Course|",
      avatar:"./images/react8.png",
      channel:" web tech",
      views:"20K Views",
      date:"15 Days ago"
    },
    {
      vid:"https://youtu.be/cbtGu5LCLRo",
      img:"/images/react9.png",
      title:"12-Hour NodeJS Express MongoDB MasterClass",
      avatar:"./images/react9.png",
      channel:"Jay",  
      views:"3M Views",
      date:"10 Year ago"
    },
    {
      vid:"https://youtu.be/5uZDLL0zaWg",
      img:"./images/react10.png",
      title:"Build and Deploy 4 Modern React Apps",
      avatar:"/images/react10.png",
      channel:"Thapa tech",
      views:"850k Views",
      date:"5 month ago"
    },

 
    {
      vid:"https://youtu.be/UijoMvAlSSg",
      img:"/images/react11.png",
      title:"Javascript LIVE Coding Interview (Mock) #javascript ",
      avatar:"./images/react11.png",
      channel:"code with kashi",
      views:"2K Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/quJzdnXuNDc",
      img:"/images/react12.png",
      title:"🔴React JS 8 Hour Bootcamp",
      avatar:"./images/react12.png",
      channel:"Thapa tech",
      views:"55K Views",
      date:"10 Days ago"
    },
    {
      vid:"https://youtu.be/A7fF6czIxEo",
      img:"/images/react13.png",
      title:"Learn CRUD using React JS | CRUD Operation.",
      avatar:"./images/react13.png",
      channel:"Andyy",  
      views:"10.5k Views",
      date:"2 month ago"
    },
    {
      vid:"https://youtu.be/DibH4GRRWQU",
      img:"./images/react14.png",
      title:"React js full tutorial in Hindi | Complete Course ",
      avatar:"/images/react14.png",
      channel:"Chris sean",
      views:"9.57M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/B7wHpNUUT4Y",
      img:"/images/react15.png",
      title:"Why React.js is taking a new direction",
      avatar:"./images/react15.png",
      channel:"Lex clip",
      views:"22K Views",
      date:"5 month ago"
    },
    {
      vid:"https://youtu.be/CgEZYq7A9xU",
      img:"/images/react16.png",
      title:"React Is A Backend Framework Now",
      avatar:"./images/react16.png",
      channel:"Apna collage",
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
          
            <React_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
    </div>
           
  </>
  )
}

export default Parent_card;
