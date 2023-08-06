import React from "react";
import './Congrads.css';
import myImage from '../Image/11873.jpg'
import { Menu } from "../Menu/Menu";
export function Home() {
    return (
        <>
        <Menu/>
        <div className="all-details">
            <div className="Background-img">
                <div className="mt-3">
                    <h2 className="head-ing">Congratulations</h2>
                </div>
                <div className="background-color">

                    <div className="col mt-4">
                        <br></br>
                        <img src={" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"} className="rounded mx-auto d-block profile-pic" alt="..." />
                    </div>
                    <div className="col text-center">
                        <h1>Kiran V</h1>
                        <p>About You SE & Co. KG is a German fashion online retailer based in Hamburg. Founded in 2014</p>
                    </div>
                    <div className="col">
                        <img src={myImage} className="watch-image rounded mx-auto d-block" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}