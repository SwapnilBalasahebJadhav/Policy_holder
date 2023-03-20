import React from 'react';

import Frontend_card from './Frontend_card';
function Parent_card() {

  var data = [
    {
      vid:"https://youtu.be/4MxTUuxSCeQ",
      img:"/images/front1.png",
      title:"FASTEST Way to Learn Frontend Development",
      avatar:"./images/front1.png",
      channel:"Level up frontend",  
      views:"2.4M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/IARvJA7uQLo",
      img:"/images/front2.png",
      title:"Is Frontend development right for you? | frontend",
      avatar:"./images/front2.png",
      channel:"Level up frontend",
      views:"180k Views",
      date:"6 month ago"
    },
    {
      vid:"https://youtu.be/ecZjJPBkgSs",
      img:"/images/front3.png",
      title:"Carear with frontend development ..",
      avatar:"./images/front3.png",
      channel:"Meet pratikh",
      views:"1M Views",
      date:"1 Year ago"
    },
    {
      vid:"https://youtu.be/ecZjJPBkgSs",
      img:"/images/front4.png",
      title:"Stop wasting time ❌ | Speed up Frontend Development 🚀",
      avatar:"./images/front4.png",
      channel:"Level up frontend",
      views:"100k Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/5sKwU5TyUhk",
      img:"/images/front5.png",
      title:"Topic to crack interview frontend 💻...",
      avatar:"./images/front5",
      channel:"Anshika gupta",  
      views:"300K Views",
      date:"6 Year ago"
    },
    {
      vid:"https://youtu.be/F1BjZ0FUTt4",
      img:"/images/front6.png",
      title:"Getting your frontend developer job | Roadmap...",
      avatar:"./images/front6.png",
      channel:"Level up frontend",
      views:"450k Views",
      date:"3 Year ago"
    },
    {
      vid:"https://youtu.be/qp-Lb68YceA",
      img:"/images/front7.png",
      title:"Journey of Frontend Developmet without IT digree",
      avatar:"./images/front7.png",
      channel:"Techical suneja",
      views:"2M Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/I64qRx084nM",
      img:"/images/front8.png",
      title:"Journey of Frontend Developer...",
      avatar:"./images/front8.png",
      channel:" Technical Suneja",
      views:"20K Views",
      date:"15 Days ago"
    },
    {
      vid:"https://youtu.be/WQ-gt8A8AOU",
      img:"/images/front9.png",
      title:"How to become a softwere developer...",
      avatar:"./images/front9.png",
      channel:"Level up frontend",  
      views:"3M Views",
      date:"10 Year ago"
    },
    {
      vid:"https://youtu.be/9UyXNHHZXWw",
      img:"./images/front10.png",
      title:"कैसे बने एक सफल Front-End Developer...",
      avatar:"/images/front10.png",
      channel:"wScube Tech",
      views:"850k Views",
      date:"5 month ago"
    },

 
    {
      vid:"https://youtu.be/9dH2RUtsYUs",
      img:"/images/front11.png",
      title:"the best front end backent conmbination...",
      avatar:"./images/front11.png",
      channel:"wScube Tech",
      views:"2K Views",
      date:"1 month ago"
    },
    {
      vid:"https://www.youtube.com/live/yiB6YxD94jY?feature=share",
      img:"/images/front12.png",
      title:"contact from react js and firebase...",
      avatar:"./images/front12.png",
      channel:"Total bhakti",
      views:"55K Views",
      date:"10 Days ago"
    },
    {
      vid:"https://www.youtube.com/watch?v=ecZjJPBkgSs",
      img:"/images/front13.png",
      title:"the best front end backent conmbination...",
      avatar:"./images/front13.png",
      channel:"Level Up Frontend",  
      views:"10.5k Views",
      date:"2 month ago"
    },
    {
      vid:"https://youtu.be/b4OH3vBANa4",
      img:"./images/front14.png",
      title:"contact from react js and firebase...",
      avatar:"/images/front14.png",
      channel:"ICC",
      views:"9.57M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/b6lRMpEbu_I",
      img:"/images/front15.png",
      title:"Front end complete html course hindi...",
      avatar:"./images/front15.png",
      channel:"Marathi",
      views:"22K Views",
      date:"5 month ago"
    },
    {
      vid:"https://youtu.be/Y8noerAiI3Y",
      img:"/images/front16.png",
      title:"Softwere tester 11 year experience...",
      avatar:"./images/front16.png",
      channel:"Suneja",
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
          
            <Frontend_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
    </div>
           
  </>
  )
}

export default Parent_card
