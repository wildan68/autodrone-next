import React from "react"

class Feature extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="p-4 flex gap-[20px] justify-center md:flex-col">
                <div className="w-[660px] h-[660px] flex flex-col pt-[120px] items-center gap-[10px] md:w-full md:h-[460px]
            bg-center bg-no-repeat p-[1em] md:pt-[60px] relative overflow-hidden">
                    <img src={'img/ultra_light.jpg'} className='object-cover w-full h-full absolute top-0 left-0 right-0 hover:scale-125 transition-all ease-in-out' />
                    <div className="text-[48px] md:text-[42px] font-[600] text-center z-10">
                        Ultra Light
                    </div>
                    <div className="text-gray text-[28px] md:text-[24px] font-[300] text-center z-10">
                        Drone move faster with weighing<br />component <span className='text-black'>under 200 g</span>
                    </div>
                </div>
                <div className="w-[660px] h-[660px] flex flex-col pt-[120px] items-center gap-[10px] md:w-full md:h-[460px]
            bg-center bg-no-repeat p-[1em] md:pt-[60px] relative overflow-hidden">
                    <img src={'img/best_resolution.jpg'} className='object-cover w-full h-full absolute top-0 left-0 right-0 hover:scale-125 transition-all ease-in-out' />
                    <div className="text-[48px] md:text-[42px] font-[600] text-center z-10 text-white">
                        Best Resolution
                    </div>
                    <div className="text-gray text-[28px] md:text-[24px] font-[300] text-center z-10">
                        Take a beautiful view with best camera<br />up to <span className='text-white'>4K Camera Resolution</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feature