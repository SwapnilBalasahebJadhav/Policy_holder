import  Avatar  from '@material-ui/core/Avatar'
import React from "react";
import "./Header.css"

export default function Header(){
    return(
        <>
            <div className="col text-white" >
                <Avatar className="trending_logo float-left" src="https://www.youtube.com/img/trending/avatar/trending.png"/>
                <h3 className="float-left mt-3 ml-4">Trending</h3>
            </div>
            <div className="col-12">
            <ul className=" trending_ul d-flex mt-2">
                    <li className="ml-3 text-white trending_first_li">NOW</li>
                    <li className="ml-5">MUSIC</li>
                    <li className="ml-5">GAMING</li>
                    <li className="ml-5">FILMS</li>
                </ul>
            <hr className="trending_hr" />
            </div>
        </>
    )
}