import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import { useRef } from "react"

const Stairs = () => {
      const stairs = useRef(null);
      const tl = gsap.timeline();
  
  useGSAP(() => {
    
    tl.from(stairs.current, {
      display: 'block'
    })

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25
      }  
    })

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25
      }
    })

    tl.to(stairs.current, {
      display: 'none'
    })

    tl.to(".stair", {
      y: "0%",
    })
  })
    return (
        <div className="flex h-screen w-full z-20 top-0 fixed">
            <div ref={stairs} className="w-full h-full flex">
                <div className="stair w-1/5 h-full bg-black"></div>
                <div className="stair w-1/5 h-full bg-black"></div>
                <div className="stair w-1/5 h-full bg-black"></div>
                <div className="stair w-1/5 h-full bg-black"></div>
                <div className="stair w-1/5 h-full bg-black"></div>
            </div>
        </div>
    )
}

export default Stairs