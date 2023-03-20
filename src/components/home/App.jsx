import React from "react";
import Header from "./Header";
import Home from "./Home";
import Live from "../live/Live";
import Frontend from "../frontend/Frontend";
import Cricket from "../cricket/Cricket";
import Bollywood from "../bollywood/Bollywood";
import Js from "../javasctipt/Js";
import Reactjs from "../react/Reactjs";
import Laptop from "../laptop/Laptop";
import Cricket2 from "../cricket2/Cricket";
import Music from "../music/Music";
import Program from"../program/Program";
import IndianCricket from "../indiancricket/IndianCricket"
import Library from "../library/Library"
import Trending from "../trending/Trending"
import History from "../history/History"
import Sport from "../sport/Sport"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


 function App({history}){
  console.log(history)
  return(
    <>  

          
          <Router>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/live" element={<Live/>}></Route>
              <Route path="/frontend" element={<Frontend/>}></Route>
              <Route path="/cricket" element={<Cricket/>}></Route>
              <Route path="/bollywood" element={<Bollywood/>}></Route>
              <Route path="/js" element={<Js/>}></Route>
              <Route path="/react" element={<Reactjs/>}></Route>
              <Route path="/laptop" element={<Laptop/>}></Route>
              <Route path="/cricket2" element={<Cricket2/>}></Route>
              <Route path="/music" element={<Music/>}></Route>
              <Route path="/program" element={<Program/>}></Route>
              <Route path="/indiancricket" element={<IndianCricket/>}></Route>
              <Route path="/trending" element={<Trending/>}></Route>
              <Route path="/library" element={<Library/>}></Route>
              <Route path="/history" element={<History/>}></Route>
              <Route path="/sport" element={<Sport/>}></Route>
              
            </Routes>
          </Router>
    </>
  )
}
export default App;