import React from "react";
import Router from "next/router";

class HomeDrone extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pt-[10em] flex flex-col gap-[30px] items-center px-[40px] h-[750px] bg-[url('../assets/img/header-bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className='text-[36px] font-medium text-center text-white'>
                    Representing Drone Light
                </div>
                <div className='text-sm text-center text-gray text-[18px] leading-7'>
                    Look up the sky and beautiful world with simple navigation<br />
                    Just record anmd get a lot memories to share, lighty and fast like a lightning
                </div>
                <button onClick={()=> Router.push('/detail')} className='bg-blue text-white w-40 h-10 rounded-full hover:bg-dark-blue text-[18px]'>
                    GET NOW
                </button>
            </div>
        )
    }
}

export default HomeDrone;