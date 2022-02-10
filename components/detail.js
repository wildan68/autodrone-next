import React from "react";

class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: [
                'img/highlight1.jpg',
                'img/highlight_large.jpg',
                'img/highlight3.jpg',
                'img/highlight4.jpg',
            ],
            pointer: 1,
        }
    }

    onPointer = (e) => {
        this.setState({
            pointer: e
        })
    }

    render() {
        return (
            <div className="py-[10em] md:py-[7em] flex flex-col items-center">
                <div className="flex flex-col w-[80%] md:w-[90%]">
                    <div className="flex gap-[65px] md:flex-col">
                        <div className="flex flex-col gap-[20px]">
                            <div className="w-[697px] md:w-full h-[516px] md:h-[263px] overflow-hidden rounded-[14px] border-[1px] border-gray p-[15px]">
                                <img src={this.state.preview[this.state.pointer]} className="object-cover w-full h-full rounded-[14px] hover:scale-125 transition-all ease-in-out" />
                            </div>
                            <div className="flex justify-between gap-[10px]">
                                <div onClick={()=>this.onPointer(0)} className={`cursor-pointer w-[170px] h-[120px] md:h-[68px] overflow-hidden p-[10px] rounded-[10px] border-[1px] ${this.state.pointer == 0 ? 'border-blue' : 'border-gray'}`}>
                                    <img src={'img/highlight1.jpg'} className='w-full h-full object-cover rounded-[10px] md:rounded-[5px]' />
                                </div>
                                <div onClick={()=>this.onPointer(1)} className={`cursor-pointer w-[170px] h-[120px] md:h-[68px] overflow-hidden p-[10px] rounded-[10px] border-[1px] ${this.state.pointer == 1 ? 'border-blue' : 'border-gray'}`}>
                                    <img src={'img/highlight2.jpg'} className='w-full h-full object-cover rounded-[10px] md:rounded-[5px]' />
                                </div>
                                <div onClick={()=>this.onPointer(2)} className={`cursor-pointer w-[170px] h-[120px] md:h-[68px] overflow-hidden p-[10px] rounded-[10px] border-[1px] ${this.state.pointer == 2 ? 'border-blue' : 'border-gray'}`}>
                                    <img src={'img/highlight3.jpg'} className='w-full h-full object-cover rounded-[10px] md:rounded-[5px]' />
                                </div>
                                <div onClick={()=>this.onPointer(3)} className={`cursor-pointer w-[170px] h-[120px] md:h-[68px] overflow-hidden p-[10px] rounded-[10px] border-[1px] ${this.state.pointer == 3 ? 'border-blue' : 'border-gray'}`}>
                                    <img src={'img/highlight4.jpg'} className='w-full h-full object-cover rounded-[10px] md:rounded-[5px]' />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[28px] font-[600]">Drone Light</span>
                            <span className="text-[20px] font-[300]">Super fast, easy control drone</span>
                            <span className="mt-[10px] text-[48px] font-[600]">$ 4.500,00</span>
                            <span className="mt-[10px] text-[22px] font-[500]">Drone features:</span>
                            <div className="mt-[25px] gap-[20px] flex flex-col text-[20px] font-[300px]">
                                <div className="flex gap-[20px]">
                                    <img src={'img/svg/camera.svg'} /><span>4K Camera Resolution</span>
                                </div>
                                <div className="flex gap-[20px]">
                                    <img src={'img/svg/memory.svg'} /><span>2 TB Stroage</span>
                                </div>
                                <div className="flex gap-[20px]">
                                    <img src={'img/svg/spedo.svg'} /><span>60 m/s Speed</span>
                                </div>
                                <div className="flex gap-[20px]">
                                    <img src={'img/svg/battery.svg'} /><span>5000 mAh Battery</span>
                                </div>
                            </div>
                            <button className="mt-[30px] py-[1em] rounded-full bg-blue hover:bg-dark-blue text-white font-[600]">
                                ORDER IT NOW
                            </button>
                        </div>
                    </div>
                    <div className="mt-[50px] border-[1px] border-gray rounded-[10px] p-[22px] flex flex-col gap-[22px]">
                        <b className="text-[28px]">Description</b>
                        <span className="font-[300] text-[20]">
                            We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for
                            the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery
                            performance. With 2 Terabyte storage, you can take a lot of picture in one take. 4K Camera resolution make
                            your video clean and feels like a real environtment. Capture your moment in easy way effortlesly with auto
                            pilot system. No need to learn how to fly and operate drone. Enjoy your simple and easy flying experience.
                            Drone light is everything you need.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailComponent