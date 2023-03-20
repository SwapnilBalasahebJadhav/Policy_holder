import React from "react";
import "./Bg_sport.css"
import  Avatar  from '@material-ui/core/Avatar'
export default function Bg_video(){
    return(
        <>
            <div className="col-12">
                <div className="sport_video">
                    <video autoPlay loop muted plays-inline className="w-100">
                        <source src="/video/bat.webm" ></source>
                    </video>
                </div>
                <div className="w-100 sport_video_bottom p-3">
                <Avatar className="avatar_sport float-left" src="images/sport_img.jpg"/>
                <h4 className="text-white mt-3 ml-3 float-left">Sports</h4>
                <h6 className="text-white mt-5">75M subscribers</h6>
                <button className="btn btn-white float-right mr-5 mt-4">Subscribe</button>
                </div>
                <div className="bg_video_border mt-4"></div>
                <h6 className="text-primary float-right mt-4 mb-3">View all</h6>
                <h5 className="text-white float-left mt-4 mb-3">DAZN UEFA Women's Champions League</h5>
                
                
            </div>
        </>
    )
}