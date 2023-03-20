import React from 'react';

import Live_card from './Live_card';
function Parent_card() {

  var data = [
    {
      vid:"https://www.youtube.com/live/04y0H01GTg0?feature=share",
      img:"/images/live1.png",  
      title:"Top 9 | Duparchya Batmya | Marathi..",
      avatar:"./images/tv9.png",
      channel:"TV9 Marathi",  
      views:"2.4M Watching",
      date:"2 Year ago"
    },
    {
      vid:"https://www.youtube.com/live/oIOnCCljFdw?feature=share",
      img:"/images/live2.png",
      title:"Super Shot | Duparchya Batmya | Marathi News...",
      avatar:"./images/abp.png",
      channel:"ABP MAZA",
      views:"100k Watching",
      date:"1 month ago"
    },
    {
      vid:"https://www.youtube.com/live/4tiiyP495QQ?feature=share",
      img:"/images/live3.png",
      title:"Top 9 | Duparchya Batmya | Marathi..",
      avatar:"./images/live3.png",
      channel:"News 18 Lokmat",
      views:"180k Watching",
      date:"6 month ago"
    },
    {
      vid:"https://www.youtube.com/live/FVhW_BFu31M?feature=share",
      img:"/images/live4.png",
      title:"Sam Tv show marathi batmya | News...",
      avatar:"./images/live4.png",
      channel:"SAM TV NEWS",
      views:"1M Watching",
      date:"1 Year ago"
    },
    {
      vid:"https://www.youtube.com/live/JjAUxbn8W6c?feature=share",
      img:"/images/live5.png",
      title:"Super Shot | Duparchya Batmya | Marathi News...",
      avatar:"./logo white.png",
      channel:"Zee Newss",  
      views:"300K Watching",
      date:"6 Year ago"
    },
    {
      vid:"https://www.youtube.com/live/qnEiipHASW0?feature=share",
      img:"/images/live6.png",
      title:"Mind relax lofi music | Hindi bollywood song...",
      avatar:"./images/live6.png",
      channel:"Hindi Songs",
      views:"450k Watching",
      date:"3 Year ago"
    },
    {
      vid:"https://www.youtube.com/live/PqCjfXDKrMg?feature=share",
      img:"/images/live7.png",
      title:"Bandakhor amdaranch kai honar lokmat",
      avatar:"./images/live7.png",
      channel:"ABP MAZA",
      views:"2M Watching",
      date:"1 month ago"
    },
    {
      vid:"https://www.youtube.com/live/9fetSDHwkPk?feature=share",
      img:"/images/live8.png",
      title:"AAP Ghotala Kumar Vishwas Statement",
      avatar:"./images/live8.png",
      channel:"INDIA TV",
      views:"20K Watching",
      date:"15 Days ago"
    },
    {
      vid:"https://www.youtube.com/live/98XaG2tt_8I?feature=share",
      img:"/images/live9.png",
      title:"Param pujya bageshwar dham  sarkar shree ram...",
      avatar:"./images/live9.png",
      channel:"Shreeee",  
      views:"3M Watching",
      date:"10 Year ago"
    },
    {
      vid:"https://www.youtube.com/live/l-jSM2JpRdM?feature=share",
      img:"./images/live10.png",
      title:"Marathi ganpati bappa songs Ganesh song..",
      avatar:"/images/live10.png",
      channel:"Ganpadi Bappa Morya",
      views:"850k Watching",
      date:"5 month ago"
    },
    {
      vid:"https://www.youtube.com/live/yiB6YxD94jY?feature=share",
      img:"/images/live11.png",
      title:"Bageshwar dham sarkar kath ramcharitra sarkar..",
      avatar:"./images/live11.png",
      channel:"Divya Darbar",
      views:"2K Watching",
      date:"1 month ago"
    },
    {
      vid:"https://www.youtube.com/live/LOMhHYnjtuc?feature=share",
      img:"/images/live12.png",
      title:"Pandit dhirendrashashri maharj | Bageshwar...",
      avatar:"./images/live12.png",
      channel:"Total bhakti",
      views:"55K Watching",
      date:"10 Days ago"
    },
    {
      vid:"https://www.youtube.com/live/vaVop7OqmXs?feature=share",
      img:"/images/live13.png",
      title:"Top 9 | Duparchya Batmya | Marathi...",
      avatar:"./images/live13.png",
      channel:"ABP MAZA",  
      views:"10.5k Watching",
      date:"2 month ago"
    },
    {
      vid:"https://www.youtube.com/live/O8FKgC3sOMM?feature=share",
      img:"./images/live14.png",
      title:"Shankar bhagwan song hindi...",
      avatar:"/images/live14.png",
      channel:"Bhakti geet",
      views:"9.57M Watching",
      date:"2 Year ago"      
    },
    {
      vid:"https://www.youtube.com/live/LNFK5IHqA7M?feature=share",
      img:"/images/live15.png",
      title:"shree swami samarth song marathi ",
      avatar:"./images/live15.png",
      channel:"Shree swami samarth",
      views:"22K Watching",
      date:"5 month ago"
    },
    {
      vid:"https://www.youtube.com/live/9yFTWDy_nuc?feature=share",
      img:"/images/live16.png",
      title:"Softwere tester 11 year experience...",
      avatar:"./images/live16.png",
      channel:"Softwere Developer",
      views:"500K Watching",
      date:"10 month ago"
    },
    
  ]
  return (
  <>
  <div className="row recomendedvideo ">
  {
    data.map((item)=>{
        return(
          
            <Live_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
    </div>
           
  </>
  )
}

export default Parent_card
