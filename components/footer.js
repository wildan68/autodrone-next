import React from "react"

class Footer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="bg-black text-white px-[150px] py-[150px] flex gap-[100px] md:flex-col md:px-[33px] md:py-[55px] md:gap-[32px]" id="footer">
                <div className="flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[20px]">
                        <img src={'img/logo.png'} /> <span className="font-[600] text-[26px]">autodrone</span>
                    </div>
                    <span className="font-[300] text-gray">
                        Look up the sky and beautiful world easily
                    </span>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <b>Explore</b>
                    <div className="mt-[15px] text-gray font-[300] gap-[15px] flex flex-col">
                        <span className="hover:text-white cursor-pointer">Our Services</span>
                        <span className="hover:text-white cursor-pointer">Spesification</span>
                        <span className="hover:text-white cursor-pointer">Refund</span>
                        <span className="hover:text-white cursor-pointer">Playlist</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <b>Account</b>
                    <div className="mt-[15px] text-gray font-[300] gap-[15px] flex flex-col">
                        <span className="hover:text-white cursor-pointer">My Account</span>
                        <span className="hover:text-white cursor-pointer">Top Benefit</span>
                        <span className="hover:text-white cursor-pointer">How-to Tutorials</span>
                        <span className="hover:text-white cursor-pointer">Moment</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <b>Office</b>
                    <div className="mt-[15px] text-gray font-[300] gap-[15px] flex flex-col">
                        <span className="hover:text-white cursor-pointer">+021 2208 1996</span>
                        <span>SCBD, Jakarta</span>
                        <span>No. 2 (Autodrone)</span>
                        <span>support@autodrone.id</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer