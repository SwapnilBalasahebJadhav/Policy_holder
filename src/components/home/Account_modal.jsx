import React from "react";
import "./Account_modal.css"
import Avatar from '@material-ui/core/Avatar';
export default function Account_modal({show,onClose}){
    if(!show){
        return(
            null
        )
    }
    return(
        <>
          <div className="modalWrapper">
          <button onClick={onClose} className="float-right btn btn-dark mt-1 mr-1">X</button>
          <Avatar alt="swapnil" src="./images/11.jpg" className='ml-3 mt-3 mr-2 float-left'/>
          <h6 className="text-white mt-2 ml-2">Swapnil Jadhav</h6>
          <p className="text-white email  ml-2">@swapniljadhav2002</p>
          <p className="text-primary ml-5 manage">Manage your google account</p>
          <hr/>
          <div className="w-100 d-flex modal_items p-0">
            <h6 className="text-white ml-4"><i className="fa fa-user mr-2"></i> Your Channel</h6>
          </div>
          <div className="w-100 d-flex modal_items p-0">
            <h6 className="text-white ml-4"><i class="fa fa-sign-out mr-2" aria-hidden="true"></i> Sign out</h6>
          </div>
          <div className="w-100 d-flex modal_items p-0">
            <h6 className="text-white ml-4"><i className="fa fa-location mr-2"></i> Location: india</h6>
          </div>
          <hr/>
          <div className="w-100 d-flex modal_items p-0">
            <h6 className="text-white ml-4"><i class="fa fa-cog mr-2" ></i> Setting</h6>
          </div>
          <div className="w-100 d-flex modal_items p-0">
            <h6 className="text-white ml-4"><i class="fa fa-question-circle mr-2"></i> Help</h6>
          </div>
          </div>
          
        </>
    )
}