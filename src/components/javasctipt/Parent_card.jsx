import React from 'react';

import Js_card from './Js_card';
function Parent_card() {

  var data = [
    {
      vid:"https://youtu.be/hKB-YGF14SY",
      img:"/images/js1.png",
      title:"JavaScript Tutorial In Hindi",
      avatar:"./images/js1.png",
      channel:"codeWithharry",  
      views:"2.4M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/lI1ae4REbFM",
      img:"/images/js2.png",
      title:"JavaScript Tutorial for Beginners - Full Course ",
      avatar:"./images/js2.png",
      channel:"Clever programmer",
      views:"180k Views",
      date:"6 month ago"
    },
    {
      vid:"https://youtu.be/KGkiIBTq0y0",
      img:"/images/js3.png",
      title:"🔴 Complete JavaScript Tutorial in Hindi in 2022",
      avatar:"./images/js3.png",
      channel:"Thapa technical",
      views:"1M Views",
      date:"1 Year ago"
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
      vid:"https://youtu.be/gv-K_PlpGT8",
      img:"/images/js6.png",
      title:"How much JS Required Before Learning React JS...",
      avatar:"./images/js6.png",
      channel:"hindi tech",
      views:"450k Views",
      date:"3 Year ago"
    },
    {
      vid:"https://youtu.be/hQ9_27otvCo",
      img:"/images/js7.png",
      title:"30+ JavaScript Projects💥 | JavaScript Projects ",
      avatar:"./images/js7.png",
      channel:"WsCubeTech",
      views:"2M Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/sHafwsBoeQ4",
      img:"/images/js8.png",
      title:"5 Github Repo To Master JavaScript For Free |",
      avatar:"./images/js8.png",
      channel:" web tech",
      views:"20K Views",
      date:"15 Days ago"
    },
    {
      vid:"https://youtu.be/cbtGu5LCLRo",
      img:"/images/js9.png",
      title:"Web Developer Interview Questions and Answers✅.",
      avatar:"./images/js9.png",
      channel:"Jay",  
      views:"3M Views",
      date:"10 Year ago"
    },
    {
      vid:"https://youtu.be/5uZDLL0zaWg",
      img:"./images/js10.png",
      title:"🔴 #5: Mastering the Node.js Core Modules | File System",
      avatar:"/images/js10.png",
      channel:"Thapa tech",
      views:"850k Views",
      date:"5 month ago"
    },

 
    {
      vid:"https://youtu.be/UijoMvAlSSg",
      img:"/images/js11.png",
      title:"#2 𝐕𝐢𝐫𝐭𝐮𝐚𝐥 𝐃𝐎𝐌 𝐯𝐬 𝐑𝐞𝐚𝐥 𝐃𝐎𝐌 𝐢𝐧 𝐑𝐞𝐚𝐜𝐭 | In-depth ",
      avatar:"./images/js11.png",
      channel:"code with kashi",
      views:"2K Views",
      date:"1 month ago"
    },
    {
      vid:"https://youtu.be/quJzdnXuNDc",
      img:"/images/js12.png",
      title:"🔴 #21: Streams and Buffer in Node JS with Example",
      avatar:"./images/js12.png",
      channel:"Thapa tech",
      views:"55K Views",
      date:"10 Days ago"
    },
    {
      vid:"https://youtu.be/A7fF6czIxEo",
      img:"/images/js13.png",
      title:"How to Learn Javascript in 2023 (From ZERO).",
      avatar:"./images/js13.png",
      channel:"Andyy",  
      views:"10.5k Views",
      date:"2 month ago"
    },
    {
      vid:"https://youtu.be/DibH4GRRWQU",
      img:"./images/js14.png",
      title:"How Much HTML, CSS, & JavaScript Is Enough? | ",
      avatar:"/images/js14.png",
      channel:"Chris sean",
      views:"9.57M Views",
      date:"2 Year ago"
    },
    {
      vid:"https://youtu.be/B7wHpNUUT4Y",
      img:"/images/js15.png",
      title:"TypeScript vs JavaScript | Guido van Rossum and Lexc",
      avatar:"./images/js15.png",
      channel:"Lex clip",
      views:"22K Views",
      date:"5 month ago"
    },
    {
      vid:"https://youtu.be/CgEZYq7A9xU",
      img:"/images/js16.png",
      title:"Javascript Introduction | Lecture 1 | Web Development",
      avatar:"./images/js16.png",
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
          
            <Js_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date}/>
      
        )
    })
  }
    </div>
           
  </>
  )
}

export default Parent_card;
