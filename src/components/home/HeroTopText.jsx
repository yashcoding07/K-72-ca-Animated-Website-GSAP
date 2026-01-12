import Video from "./Video"

const HeroTopText = () => {
  return (
    <div className="font-[font1] pt-5 text-center text-white">  
        <div className="text-[9.5vw] flex items-center justify-center leading-[8vw] uppercase">
            The spark for
        </div>
        <div className="text-[9.5vw] uppercase flex items-start justify-center leading-[8vw]">
            all
            <div className="h-[8vw] rounded-full overflow-hidden">
                <video className="w-full h-full object-cover rounded-full" autoPlay loop muted src="../public/Media/mainVideo.mp4" alt="main video" />
            </div>
            things
        </div>
        <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[9.5vw]">
            creative
        </div>
    </div>
  )
}

export default HeroTopText