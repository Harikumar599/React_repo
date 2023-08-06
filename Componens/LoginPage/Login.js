import React from "react";
import './Login.css';
import { Menu } from "../Menu/Menu";
export function Login() {
    return (
        <>
            <Menu />
            <div className="login-background  d-flex justify-content-center align-items-center h-100 p-4">
                <div class="card ">
                    <div class="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-center mt-5 container-fluid  col-12 md-6  col-lg-6 ">
                                    <img src="https://th.bing.com/th/id/R.2aa80db031ded75fcebe60913b271555?rik=AEt5vmr4J8mfUg&riu=http%3a%2f%2frlv.zcache.com%2fmagic_programmers_do_it_faster_classic_round_sticker-r4cd3ad4bd1fe41e48d31413407197f65_v9waf_8byvr_324.jpg&ehk=bWt%2fgZK8rCgwbRdxvgmA9Rqe%2fLLfiwKbhY7NvEdg2LQ%3d&risl=&pid=ImgRaw&r=0" className="rounded-circle image-one img-fluid" alt="..." />
                                </div>
                            </div>

                            <div className=" d-flex flex-column align-items-center  col-12 col-md-6  col-lg-6">
                                <br></br>
                                <h3 className="text-center">Member Login</h3>
                                <br></br>
                                <div className="d-flex flex-column align-items-center login-page ">
                                    <tr>
                                        <input type="email" class="form-control box-one w-100" id="exampleFormControlInput1" placeholder="Email" />
                                    </tr>
                                    <br></br>
                                    <div class="pass">
                                        <tr>
                                            <input type="password" class="form-control box-one w-100" id="exampleFormControlInput1" placeholder="Password" />
                                        </tr>
                                        <br></br>
                                        <tr className="d-flex">
                                            <button type="button" class="btn btn-success button-color btn btn-outline-warning w-100">LOGIN</button>
                                        </tr>
                                        <br></br>
                                        <div className="d-flex flex-column align-items-center">
                                            <h6>Forget<span ><a href="#" className="option-two"> Username/Password? </a></span></h6>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <div className="d-flex flex-column align-items-center">
                                            <h6 className="last-head"><a href="#" className="option-two">Create your account</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}