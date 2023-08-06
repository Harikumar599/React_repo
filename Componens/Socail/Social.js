import React from 'react';
import './Button.css';
import { Menu } from "../Menu/Menu";
export function SocialButton() {
  return (
    <>
    <Menu/>
    <div className='card-body'>
    <div className="back-pic img-fluid">
      <div className="col d-flex justify-content-evenly">
        <div className="row three-button">
          <div className="col">
            <button className="btn btn-warning">Like</button>
          </div>
          <div className="col">
            <button className="btn btn-light">Comment</button>
          </div>
          <div className="col">
            <button className="btn btn-info">Share</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
