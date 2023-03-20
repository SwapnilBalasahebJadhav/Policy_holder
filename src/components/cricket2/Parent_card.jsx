import React from 'react';

import Cricket_card from './Cricket_card';
function Parent_card() {

  var data = [

    {
      vid:"https://youtu.be/jVWzBOx-_tk",
      img:"/images/cricket7.png",
      title:"ipl csk ke liye bad news csk ki badhi tension",
      avatar:"./images/cricket7.png",
      channel:"Sport tak",
      views:"2M Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/A98J0-C_IpQ",
      img:"/images/cricket8.png",
      title:"IPL 2023 india ke liya good news boller...",
      avatar:"./images/cricket8.png",
      channel:" Technical Suneja",
      views:"20K Views",
      date:"15 Days ago"
    },
    {
      vid:"https://youtu.be/UERf9c1TL5E",
      img:"/images/cricket9.png",
      title:"ipl csk ke liye bad news csk ki badhi tension...",
      avatar:"./images/cricket9.png",
      channel:"Level up frontend",  
      views:"3M Views",
      date:"10 Year ago"
    },
    {
      vid:"https://youtu.be/BVxhgTYvvM0",
      img:"./images/cricket10.png",
      title:"ipl csk ke liye bad news csk ki badhi tension...",
      avatar:"/images/cricket10.png",
      channel:"wScube Tech",
      views:"850k Views",
      date:"5 month ago"
    },

 
    {
      vid:"https://youtu.be/3hIbDYglr14",
      img:"/images/cricket11.png",
      title:"the best front end backent conmbination...",
      avatar:"./images/cricket11.png",
      channel:"wScube Tech",
      views:"2K Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/FKW2QxfcA88",
      img:"/images/cricket12.png",
      title:"IPL 2023 MI, CSK,RR replacement...",
      avatar:"./images/cricket12.png",
      channel:"Total bhakti",
      views:"55K Views",
      date:"10 Days ago"
    },
    {
      vid:"https://youtu.be/6Bw7FYp9jI4",
      img:"/images/cricket13.png",
      title:"ipl csk ke liye bad news csk ki badhi tension...",
      avatar:"./images/cricket13.png",
      channel:"Level Up Frontend",  
      views:"10.5k Views",
      date:"2 month ago"
    },
    {
      vid:"https://youtu.be/Yll7g1bF068",
      img:"./images/cricket14.png",
      title:"Stokes to leave ipl because enjery ✈️...",
      avatar:"/images/cricket14.png",
      channel:"ICC",
      views:"9.57M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/_JHxUWQ5cUA",
      img:"/images/cricket15.png",
      title:"IPL 2023 india ke liya good news boller....",
      avatar:"./images/cricket15.png",
      channel:"Marathi",
      views:"22K Views",
      date:"5 month ago"
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
    {
      vid:"https://youtu.be/9fUl-394H1k",
      img:"/images/cricket1.png",
      title:"IPL 2023 All Teams Most Dangerous All-Rounder",
      avatar:"./images/cricket1.png",
      channel:"Cricket",  
      views:"2.4M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/0Rd3HQouCaY",
      img:"/images/cricket2.png",
      title:"IPL 2023 MI, CSK,RR replacement",
      avatar:"./images/cricket2.png",
      channel:"Ipl",
      views:"180k Views",
      date:"6 month ago"
    },
    {
      vid:"https://www.youtube.com/live/RgtnGGFQcLM?feature=share",
      img:"/images/cricket3.png",
      title:"Womens IPL 2023 ki aari jankari sirf yaha...",
      avatar:"./images/cricket3.png",
      channel:"Meet pratikh",
      views:"1M Views",
      date:"1 Year ago"
    },
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
      vid:"https://youtu.be/nFnRqgNXfgA",
      img:"/images/cricket6.png",
      title:"IPL 2023 india ke liya good news boller...",
      avatar:"./images/cricket6.png",
      channel:"IPL 2023",
      views:"450k Views",
      date:"3 Year ago"
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
