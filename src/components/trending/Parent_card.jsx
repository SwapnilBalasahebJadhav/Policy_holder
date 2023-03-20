
import React from 'react';
import Header from './Header'
import Trending_card from './Trending_card';
function Parent_card() {

  var data = [
  
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
    {
      vid:"https://youtu.be/KGkiIBTq0y0",
      img:"/images/react3.png",
      title:"React.js Full Course in Hindi for Beginners",
      avatar:"./images/react3.png",
      channel:"Thapa technical",
      views:"1M Views",
      date:"1 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/tBmeblr67U0",
      img:"/images/react4.png",
      title:"🎯 React Tutorial in Hindi for Beginners ",
      avatar:"./images/react4.png",
      channel:"Thapa technical",
      views:"100k Views",
      date:"1 month ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/0F-nudTm5EU",
      img:"/images/react5.png",
      title:"🔴 Complete React JS Tutorial in Hindi...",
      avatar:"./images/react5",
      channel:"Thapa technical",  
      views:"300K Views",
      date:"6 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/Y0PojdqWbNs",
      img:"/images/laptop12.png",
      title:"Laptop Vs Desktop",
      avatar:"./images/laptop12.png",
      channel:"Thapa tech",
      views:"55K Views",
      date:"10 Days ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      vid:"https://youtu.be/p65dMFtRtJQ",
      img:"/images/laptop13.png",
      title:"Laptop Buying Guide | Laptop Konsa Lena",
      avatar:"./images/laptop13.png",
      channel:"Andyy",  
      views:"10.5k Views",
      date:"2 month ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/XdiaNmqUIGo",
      img:"./images/laptop14.png",
      title:"second hand laptop in Pimpri",
      avatar:"/images/laptop14.png",
      channel:"Chris sean",
      views:"9.57M Views",
      date:"2 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/XdiaNmqUIGo",
      img:"/images/laptop15.png",
      title:"Dell XPS 13 2-in-1 Unboxing & First Impressions",
      avatar:"./images/laptop15.png",
      channel:"Lex clip",
      views:"22K Views",
      date:"5 month ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/w_61VE-YCrY",
      img:"/images/laptop16.png",
      title:"This Crazy Dell Laptop is for you - Lets Check",
      avatar:"./images/laptop16.png",
      channel:"Apna collage",
      views:"500K Views",
      date:"10 month ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/XZNfxtAc_1M",
      img:"/images/laptop1.png",
      title:"Top 6 Best Laptops Under Rs.60,000 In 2022⚡",
      avatar:"./images/laptop1.png",
      channel:"codeWithharry",  
      views:"2.4M Views",
      date:"2 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/pD72tn_F7Ts",
      img:"/images/laptop2.png",
      title:"World's Fastest Laptop - MacBook Pro 16",
      avatar:"./images/laptop2.png",
      channel:"Clever programmer",
      views:"180k Views",
      date:"6 month ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/gr2RzupPPTg",
      img:"/images/laptop3.png",
      title:"Top 6 Best Laptop Under 50000⚡",
      avatar:"./images/laptop3.png",
      channel:"Thapa technical",
      views:"1M Views",
      date:"1 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/KA5z_KeoTnw",
      img:"/images/laptop4.png",
      title:"Dell XPS 13 Plus Unboxing & First Impressions⚡",
      avatar:"./images/laptop4.png",
      channel:"Thapa technical",
      views:"100k Views",
      date:"1 month ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/UOqETpwDF_Y",
      img:"/images/laptop5.png",
      title:"TOP 7 BEST HP Laptop In 2023 [ EXCLUSIVE ]..",
      avatar:"./images/laptop5",
      channel:"Thapa technical",  
      views:"300K Views",
      date:"6 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      vid:"https://youtu.be/FOAb9IUXSXU",
      img:"/images/laptop6.png",
      title:"Chromebooks Starting @ Just ₹15k 😲 Feat...",
      avatar:"./images/laptop6.png",
      channel:"hindi tech",
      views:"450k Views",
      date:"3 Year ago",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
  ]
  return (
  <>
  <div className="row recomendedvideo">
       <Header/>
       {
          data.map((item)=>{
              return(
                
                  <Trending_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date} desc={item.desc}/>
            
              )
          })
        }
  </div>
           
  </>
  )
}

export default Parent_card;
