import React from 'react'
import "./Live.css"
import Parent_card from './Parent_card'
import Sidebar from '../home/Sidebar'
function Live() {
  return (
    <>
    <div className="container-fluid">  
        <div className="row "> 
            <div className="col-md-2 col-4 d-none d-md-inline text-white Sidenav">
            <Sidebar/>
            </div>
            
            <div className="col-12 ">
              <Parent_card/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Live