import { Link } from "react-router-dom"

const HeroBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 text-white">
        <div className="flex items-center hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300 uppercase border-3 px-14 mb-1 rounded-full">
        <Link to="/projects" className="text-[5vw]">Projets</Link>
        </div>
        <div className="flex items-center hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300 uppercase border-3 px-14 mb-1 rounded-full">
        <Link to="/agence" className="text-[5vw]">Agence</Link>
        </div>
    </div>
  )
}

export default HeroBottomText