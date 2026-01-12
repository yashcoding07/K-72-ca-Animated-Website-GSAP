import HeroBottomText from "../components/home/HeroBottomText"
import HeroTopText from "../components/home/HeroTopText"
import Video from "../components/home/Video"

const Home = () => {
  return (
    <div>
        <div className="h-screen w-screen fixed">
            <Video />
        </div>
        <div className="h-screen w-screen relative flex flex-col justify-between items-center overflow-hidden">
            <HeroTopText />
            <HeroBottomText />
        </div>
    </div>
  )
}

export default Home