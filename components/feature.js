const Feature = () => {
    return (
        <div className="p-4 flex gap-[20px] justify-center md:flex-col">
            <div className="bg-[url('../assets/img/ultra_light.jpg')] w-[660px] h-[660px] flex flex-col pt-[120px] items-center gap-[10px] md:w-full md:h-[460px]
            bg-center bg-no-repeat p-[1em] md:pt-[60px] hover:bg-[length:150%_150%] hover:transition-all">
                <div className="text-[48px] font-[600] text-center">
                    Ultra Light
                </div>
                <div className="text-gray text-[28px] font-[300] text-center">
                    Drone move faster with weighing<br/>component <span className='text-black'>under 200 g</span>
                </div>
            </div>
            <div className="bg-[url('../assets/img/best_resolution.jpg')] w-[660px] h-[660px] flex flex-col pt-[120px] items-center gap-[10px] text-white md:w-full md:h-[460px]
            bg-center bg-no-repeat p-[1em] md:pt-[60px] hover:bg-[length:150%_150%] hover:transition-all">
                <div className="text-[48px] font-[600] text-center">
                    Best Resolution
                </div>
                <div className="text-gray text-[28px] font-[300] text-center">
                    Take a beautiful view with best camera<br/>up to <span className='text-white'>4K Camera Resolution</span>
                </div>
            </div>
        </div>
    )
}

export default Feature