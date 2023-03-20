import React from 'react'
import "./Home.css"
import RecomendedVideo from './RecomendedVideo'

import Sidebar from '../home/Sidebar'

function Home() {
  
  return (
    <>
       <div className="container-fluid">  
        <div className="row "> 
            <div className="col-md-2 col-4 d-none d-md-inline text-white Sidenav">
               <Sidebar/>
            </div>
            
            <div className="col-12">
                <RecomendedVideo/>
            </div>
        </div>
        </div>
     
    </>
  )
}

export default Home