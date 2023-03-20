
import React from 'react';
import Library_card from './Library_card';
import  Avatar  from '@material-ui/core/Avatar'
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
    
  ]
  return (
  <>
  <div className="row recomendedvideo">
    <div className="col-12 col-lg-8 pl-3">
    <h6 className='text-primary float-right mb-4'>See all</h6>
      <h5 className='text-white library_name mb-4'>History</h5>
   
      <div className="row">
      {
          data.map((item)=>{
              return(
                
                  <Library_card video={item.vid} img={item.img} title={item.title} avatar={item.avatar} channel={item.channel} views={item.views} date={item.date} desc={item.desc}/>
            
              )
          })
        }
      </div>
  
    </div>
    <div className="col-lg-4  d-none d-lg-inline">
      <div className="card library_about mt-5">
        <div className="car-body  p-1">
            <Avatar className="trending_logo library_avatar ml-4" src="./images/11.jpg"/>
            <h6 className='text-center text-white mr-4 mt-3'>Swapnil Jadhav</h6>
           
        </div>
        <div className=" card-footer pt-0 pr-5 pl-5">
        <hr className=''/>
        <p className='text-dark'>Subscriptions <span className='float-right'>181</span></p>
        <hr className=''/>
        <p className='text-dark'>Uploads<span className='float-right'>2</span></p>
        <hr className=''/>
        <p className='text-dark'>Likes<span className='float-right'>795</span></p>
        <hr className=''/>
        </div>

      </div>
    </div>
       
    
  </div>
           
  </>
  )
}

export default Parent_card;
