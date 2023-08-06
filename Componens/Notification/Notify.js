import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../Menu/Menu";

export function Notify() {
    return (
        <>
        <Menu/>
        <div className="contianer-fluid">
            <h1 class="text-center">Notification</h1>
            <div className="container align-items-center">
                <div className="row text-center g-4">
                    <div class="bg-primary text-white col-12 col-sm-12 col-md-6 col-lg-12  p-2">
                        <FontAwesomeIcon icon={faCircleCheck} />    Information Message
                    </div>
                    <div class="bg-success text-white col-12 col-sm-12 col-md-6 col-lg-12  p-2">
                        <FontAwesomeIcon icon={faCircleCheck} />    Success Message
                    </div>
                    <div class="bg-warning text-white col-12 col-sm-12 col-md-6 col-lg-12  p-2">
                        <FontAwesomeIcon icon={faBell} />     warning Message
                    </div>
                    <div class="bg-danger text-white col-12 col-sm-12 col-md-6 col-lg-12  p-2">
                        <FontAwesomeIcon icon={faTriangleExclamation} />   Error Message
                    </div>
                </div>
            </div>
            </div>
            <br></br>
        
        </>
    );
}