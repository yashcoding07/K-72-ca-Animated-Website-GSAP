import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Agence = () => {

    gsap.registerPlugin(ScrollTrigger);

    const imageDivRef = useRef(null);
    const imageRef = useRef(null);

    const imageArray = [
        "../public/Media/Carl_480x640.jpg",
        "../public/Media/Olivier_480x640.jpg",
        "../public/Media/ChantalG_480x640.jpg",
        "../public/Media/Michele_480X640.jpg",
        "../public/Media/MEL_480X640.jpg",
        "../public/Media/CAMILLE_480X640_2.jpg",
        "../public/Media/MEGGIE_480X640_2.jpg",
        "../public/Media/joel_480X640_3.jpg"
    ];

    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                start: "top 21.8%",
                end: "top -150%",
                pin: true,
                scrub: 1,
                pinSpacing: true,
                pinReparent: true,
                pinType: "transform",
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    let imageIndex; 
                    if(elem.progress < 1){
                        imageIndex = Math.floor(elem.progress * (imageArray.length));
                    }else{
                        imageIndex = imageArray.length - 1;
                    }
                    imageRef.current.src = imageArray[imageIndex];
                }
            }
        })
    })


    return (
        <>
            <div className="section1 py-1">
                <div ref={imageDivRef} className="absolute h-[20vw] w-[15vw] rounded-3xl overflow-hidden top-[20vh] left-[30vw]">
                    <img ref={imageRef} className="h-full w-full object-cover" src="../public/Media/Carl_480x640.jpg" alt="Team Members" />
                </div>
                <div className="font-[font2] relative">
                    <div className="mt-[55vh]">
                        <h1 className="text-[20vw] leading-[17vw] text-center uppercase">SEVEN7Y <br /> TWO</h1>
                    </div>
                    <div className="pl-[40%] mt-5">
                        <p className="text-6xl tracking-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                    </div>
                </div>
            </div>
            <div className="section2 h-screen"></div>
        </>
    )
}

export default Agence