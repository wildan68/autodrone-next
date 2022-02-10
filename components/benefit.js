import React from "react"
import Image from "next/image"

class Benefit extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="bg-dark-white w-full h-auto px-[140px] py-[85px] md:px-[60px] md:h-auto">
                <div className="flex w-full justify-center gap-[80px] md:flex-col md:items-center">
                    <div className="w-[342px] h-[358px]">
                        <Image src={require('../assets/img/benefit_feature_image.png')} alt="drone" />
                    </div>
                    <div className="flex flex-col gap-[15px] w-[50%] md:w-full md:text-center">
                        <span className="text-black font-bold text-[48px]">
                            Why Drone Light?
                        </span>
                        <span className="text-[24px]">
                            We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation.
                        </span>
                        <div className="flex gap-[50px] flex-wrap justify-center">
                            <div className="flex gap-[5px] flex-col items-center">
                                <span className="text-[36px] md:text-[28px] font-[600]">
                                    4K
                                </span>
                                <span className="text-[20px] font-[300] text-center text-gray">
                                    Camera<br />Resolution
                                </span>
                            </div>
                            <div className="flex gap-[5px] flex-col items-center">
                                <span className="text-[36px] md:text-[28px] font-[600]">
                                    2TB
                                </span>
                                <span className="text-[20px] font-[300] text-center text-gray">
                                    Stroage<br />Capacity
                                </span>
                            </div>
                            <div className="flex gap-[5px] flex-col items-center">
                                <span className="text-[36px] md:text-[28px] font-[600]">
                                    60 m/s
                                </span>
                                <span className="text-[20px] font-[300] text-center text-gray">
                                    Super<br />Max Speed
                                </span>
                            </div>
                            <div className="flex gap-[5px] flex-col items-center">
                                <span className="text-[36px] md:text-[28px] font-[600]">
                                    30 mins
                                </span>
                                <span className="text-[20px] font-[300] text-center text-gray">
                                    Long Flight<br />Time
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefit