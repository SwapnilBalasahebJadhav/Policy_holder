import React from 'react';
import "./Recomendedvideo.css"
import VideoCard from './VideoCard';
function RecomendedVideo() {

  var data = [
    {
      vid:"https://youtu.be/lFSYXF1wuSg",
      img:"/images/img1.png",
      title:"Phir hera pheri | Hindi movies | Akshay Kumar...",
      avatar:"./images/img1.png",
      channel:"Shemaroo tv",  
      views:"2.4M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/RmFt909k1LE",
      img:"/images/img2.png",
      title:"Real main frontend developer kaise kam...",
      avatar:"./images/img2.png",
      channel:"Level up frontend",
      views:"100k Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/jqpePNeAtNs",
      img:"/images/img3.png",
      title:"Mind relax lofi music | Hindi bollywood song...",
      avatar:"./images/img3.png",
      channel:"Hindi song",
      views:"180k Views",
      date:"6 month ago"
    },
    {
      vid:"https://youtu.be/OzludKkrnKk",
      img:"/images/img4.png",
      title:"Real main frontend developer kaise kam...",
      avatar:"./images/img4.png",
      channel:"ANIL",
      views:"1M Views",
      date:"1 Year ago"
    },
    {
      vid:"https://youtu.be/Tssx17scqO4",
      img:"/images/img5.png",
      title:"Ganpati bappa Morya || Ganpati Songs...",
      avatar:"./logo white.png",
      channel:"Marathi tadka",  
      views:"300K Views",
      date:"6 Year ago"
    },
    {
      vid:"https://youtu.be/ZrU7Fd3mCvQ",
      img:"/images/img6.png",
      title:"Vishwacha vishram re swami maza ram...",
      avatar:"./images/img6.png",
      channel:"Swami Samarth",
      views:"450k Views",
      date:"3 Year ago"
    },
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
      vid:"https://youtu.be/1nFRENHbmKs",
      img:"/images/img9.png",
      title:"Comedy movie || Hera pheri Comedy...",
      avatar:"./images/img9.png",
      channel:"Movie Katta",  
      views:"3M Views",
      date:"10 Year ago"
    },
    {
      vid:"https://youtu.be/6VyNHZFEsWU",
      img:"./images/img10.png",
      title:"Motivation | Motivation marathi videos...",
      avatar:"/images/img10.png",
      channel:"Fresh mind",
      views:"850k Views",
      date:"5 month ago"
    },
    {
      vid:"https://youtu.be/pZi0kOZPi5s",
      img:"/images/img11.png",
      title:"Marathi kirtan | Chandreashekhar maharaj",
      avatar:"./images/img11.png",
      channel:"Marathi Tadka",
      views:"2K Views",
      date:"1 month ago"
    },
    {
      vid:"https://www.youtube.com/live/yiB6YxD94jY?feature=share",
      img:"/images/img12.png",
      title:"Pandit dhirendrashashri maharj | Bageshwar...",
      avatar:"./images/img12.png",
      channel:"Total bhakti",
      views:"55K Views",
      date:"10 Days ago"
    },
    {
      vid:"https://www.youtube.com/watch?v=ecZjJPBkgSs",
      img:"/images/img13.png",
      title:"TOPICS to crack Frontend Developer Interview...",
      avatar:"./images/img13.png",
      channel:"Level Up Frontend",  
      views:"10.5k Views",
      date:"2 month ago"
    },
    {
      vid:"https://youtu.be/b4OH3vBANa4",
      img:"./images/img14.png",
      title:"ICC A tribute to MS Dhoni | MS DHONI...",
      avatar:"/images/img14.png",
      channel:"ICC",
      views:"9.57M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/b6lRMpEbu_I",
      img:"/images/img15.png",
      title:"Gaur gopal dae full video Motivation...",
      avatar:"./images/img15.png",
      channel:"Marathi",
      views:"22K Views",
      date:"5 month ago"
    },
    {
      vid:"https://youtu.be/Y8noerAiI3Y",
      img:"/images/img16.png",
      title:"Softwere tester 11 year experience...",
      avatar:"./images/img16.png",
      channel:"Suneja",
      views:"500K Views",
      date:"10 month ago"
    },
    
  ]
  return (
  <>
  <div className="row  recomendedvideo">
  {
    data.map((item)=>{
        return(
          
            <VideoCard video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
    </div>
           
  </>
  )
}

export default RecomendedVideo
