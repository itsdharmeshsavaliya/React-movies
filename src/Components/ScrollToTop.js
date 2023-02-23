import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";


const ScrollToTop = () => {


    const [Down, setDown] = useState(false);


    const clickTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const listenToScroll = () => {
        let height = 300;
        const window = document.body.scrollTop || document.documentElement.scrollTop;
        if (window > height) {
            setDown(true);
        }
        else {
            setDown(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    })




    return <>
        {
            Down && (
                <div className="text-end fixed-bottom">
                    <button type="button" className="btn btn-danger" onClick={clickTop} style={{ margin: '20px', 'borderRadius': '20px', 'animation': 'mymove 5s infinite' }}>
                        <AiOutlineArrowUp style={{ 'fontSize': '20px' }} />
                    </button>
                </div>
            )
        }
    </>;
};

export default ScrollToTop;
