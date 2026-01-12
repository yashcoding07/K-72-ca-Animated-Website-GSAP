import { Link } from "react-router-dom"

const HeroBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 text-white">
        <div className="flex items-center hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300 uppercase border-3 px-10 rounded-full">
        <Link to="/projects" className="text-[5vw]">Projects</Link>
        </div>
        <div className="flex items-center hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300 uppercase border-3 px-10 rounded-full">
        <Link to="/agence" className="text-[5vw]">Agency</Link>
        </div>
    </div>
  )
}

export default HeroBottomText