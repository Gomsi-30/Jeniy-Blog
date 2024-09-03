
const Banner = ()=>{
    return (
        <div className="relative bg-[url('/banner1.png')] bg-cover bg-center h-[300px] md:h-[360px] w-full">
            <div className='bg-black opacity-30 h-full w-full'></div>
            <div className='absolute bottom-[20px] left-[30px] md:bottom-[80px] md:left-[100px] h-auto w-auto p-3 bg-white text-black font-bold text-3xl'>
                Influencers
            </div>
        </div>
    )
}

export default Banner;