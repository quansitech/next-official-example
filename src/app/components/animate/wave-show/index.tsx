"use client";

import type { ReactNode } from "react";

import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const staggerMenuItems = stagger(0.1, {
    startDelay: 0.2
  });

export const WaveShow = ({children}: {children: ReactNode}) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const animateGo = async () => {
            await animate(`.${WaveShow.waveshow}`, { opacity: 0, y: 50 }, {duration: 0});
            await animate(scope.current, { opacity: 1}, {duration: 0.1});
            await animate(`.${WaveShow.waveshow}`, { opacity: 1, y: 0 }, {
                type: 'spring',
                damping: 10,
                stiffness: 100,
                delay: staggerMenuItems,
                duration: 0.25
            });
        }

        animateGo();
        
    }, [animate, scope])
    
    return <div style={{opacity: 0}} ref={scope}>{children}</div>
}

WaveShow.waveshow = "wave-show";