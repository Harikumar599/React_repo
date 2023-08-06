import React from "react";
import { Link } from "react-router-dom";
export function Menu() {

    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex justify-content-end">
               
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse justify-content-evenly" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link d-flex justify-content-center" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex justify-content-center" href="/Super">Super Over</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex justify-content-center" href="/SocialButton">SocailButton</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex justify-content-center" href="/Notify">Notify</a>
                        </li>
                        <li class="nav-item"> 
                            <a class="nav-link d-flex justify-content-center" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex justify-content-center" href="/Technology">Technology</a>
                        </li>
                        <li class="nav-item dropdown">

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}