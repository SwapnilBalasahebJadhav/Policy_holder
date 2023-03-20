import React from 'react'
import "./Cricket.css"
import Parent_card from './Parent_card'
import Sidebar from '../home/Sidebar'
function Cricket() {
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

export default Cricket