import React from "react"

class Testimoni extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="px-[150px] flex flex-col gap-[80px] py-[5em] md:py-[2em] md:px-[32px]" id="review">
                <span className="font-[600] text-[64px] md:text-[36px]">
                    What Our &quot;Pilots<br />Are Saying
                </span>
                <div className="flex gap-[50px] md:flex-col md:items-center">
                    <div className="w-[347px] h-[250px] rounded-[10px] border-gray border-[1px] p-[30px] flex flex-col gap-[30px]">
                        With high resolution camera, picture become clear and beautiful. It&apos;s so easy to operate drone.
                        <div className="flex gap-[30px]">
                            <div className="rounded-full w-[70px] h-[70px] overflow-hidden">
                                <img src={'img/profile1.jpg'} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-[600] text-[20px]">
                                    Hugo Adams
                                </span>
                                <span className="font-[300] text-[18px] text-gray">
                                    Content Creator
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[347px] h-[250px] rounded-[10px] border-gray border-[1px] p-[30px] flex flex-col gap-[30px]">
                        Taking high view video become easy and faster. Battery performance really helping for making film
                        <div className="flex gap-[30px]">
                            <div className="rounded-full w-[70px] h-[70px] overflow-hidden">
                                <img src={'img/profile2.jpg'} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-[600] text-[20px]">
                                    Jennie Obrien
                                </span>
                                <span className="font-[300] text-[18px] text-gray">
                                    Director Film
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[347px] h-[250px] rounded-[10px] border-gray border-[1px] p-[30px] flex flex-col gap-[30px]">
                        Making video content creator for my trip vlog so powerful and wondeful. Love the video quality
                        <div className="flex gap-[30px]">
                            <div className="rounded-full w-[70px] h-[70px] overflow-hidden">
                                <img src={'img/profile3.jpg'} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-[600] text-[20px]">
                                    Lisa Millz
                                </span>
                                <span className="font-[300] text-[18px] text-gray">
                                    Content WQCreator
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimoni