import React from 'react';
import { Menu } from "../Menu/Menu";
export function Super()
{
    return(
        <>
        <Menu/>
        <div className='row bg-primary m-0  d-flex justify-content-center'>
            <div className='col-8 text-center'>
                <h1 className='my-4 text-white'>Super Over League</h1>
                <div className='row'>
                    <div className='col-12 col-md-6 p-0'>
                        <img className='w-100 h-75' src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'></img>
                    </div>
                    <div className='col-12 col-md-6 p-0'>
                        <img className='w-100 h-75' src='https://assets.ccbp.in/frontend/react-js/csk-img.png'></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}