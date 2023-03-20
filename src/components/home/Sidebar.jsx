import React from "react";
import { NavLink } from "react-router-dom";


import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
export default function Sidebar(){
    return(
        <>
            <ul className=''>  
                <li className='sidemenu_list'><NavLink to="/" className="sidemenu_link"><HomeIcon/> <span>Home</span></NavLink></li>
                <li className='sidemenu_list'><NavLink to="/trending" className="sidemenu_link"><WhatshotIcon/> <span>Trending</span></NavLink></li>
                <li className='sidemenu_list'><NavLink to="/library" className="sidemenu_link"><VideoLibraryIcon/> <span>Library</span></NavLink></li>
                <hr/>
               
                <li className='sidemenu_list'><NavLink to="/history" className="sidemenu_link"><HistoryIcon/> <span>History</span></NavLink></li>
                <li className='sidemenu_list'><NavLink to="/sport" className="sidemenu_link"><EmojiEventsIcon/> <span>Sport</span></NavLink></li>
                {/* <li className='sidemenu_list'><NavLink to="/watch_liter" className="sidemenu_link"><WatchLaterIcon/> <span>Watch Leter</span></NavLink></li> */}
                <hr/>
                <li className='sidemenu_list'><NavLink to="#" className="sidemenu_link"><SubscriptionsIcon/> <span>Subscription</span></NavLink></li>
                <li><Avatar src="https://upload.wikimedia.org/wikipedia/en/8/8a/Tv9_Marathi.jpg" className="float-left subscription_avatar"/><span className="ml-3">TV9 Marathi <WifiTetheringIcon className="text-danger subscription_icon float-right"/></span></li>
                <li><Avatar src="https://zeelwebsite.s3.amazonaws.com/zeetele/wp-content/uploads/2018/12/Zee-24-Tass2.jpg" className="float-left subscription_avatar"/><span className="ml-3">Zee 24 Tass <WifiTetheringIcon className="text-danger subscription_icon float-right"/></span></li>
                <li><Avatar src="https://yt3.googleusercontent.com/ytc/AL5GRJUjLHKx1P1qurwelwsblUqX87x0id9-MC2AE-hANg=s900-c-k-c0x00ffffff-no-rj" className="float-left subscription_avatar"/><span className="ml-3">Sumeet Music <WifiTetheringIcon className="text-danger subscription_icon float-right"/></span></li>
                <li><Avatar src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" className="float-left subscription_avatar"/><span className="ml-3">Clever Progra.<WifiTetheringIcon className="text-danger subscription_icon float-right"/></span></li>
                <li><Avatar src="https://media.licdn.com/dms/image/C560BAQEca0zGP12sDA/company-logo_200_200/0/1633667498546?e=2147483647&v=beta&t=iFzR7FGv3qW9em79Xsv3Q3J4yGuMDBK2GtWYZt0VQJM" className="float-left subscription_avatar"/><span className="ml-3">A2Z infotech <WifiTetheringIcon className="text-danger subscription_icon float-right"/></span></li>
                <li><Avatar src="https://dindoripranit.org/wp-content/uploads/2019/11/Shree-Swami-Samarth-12.jpg" className="float-left subscription_avatar"/><span className="ml-3">Shree Swami.<WifiTetheringIcon className="text-danger subscription_icon float-right"/></span></li>
                <li className='sidemenu_list'><NavLink to="#" className="sidemenu_link"><ExpandMoreIcon/> <span>Show More</span></NavLink></li>
                <hr/>
                <p>About Press Copyright Contact us Creator Advertise Developers</p>
                <p className="mt-1">TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
                <p className="mt-1">© 2023 Swapnil</p>
                
            </ul>
        </>
    )
}