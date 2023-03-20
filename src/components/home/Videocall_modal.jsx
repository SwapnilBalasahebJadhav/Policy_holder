import React from "react";
import "./Account_modal.css"
export default function Videocall_modal({show1,onClosevideo}){
    if(!show1){
        return(
            null
        )
    }
    return(
        <>
            <div className="modalWrapper_videocall">
                 <div className="w-100 d-flex modal_items p-0">
                   <h6 className="text-white ml-4"> Uplode video</h6>
                 </div>
                 <div className="w-100 d-flex modal_items p-0">
                   <h6 className="text-white ml-4">Go live</h6>
                 </div>
                 <button onClick={onClosevideo}>X</button>
            </div>
          
        </>
    )
}