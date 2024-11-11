"use client";

import type { ReactNode } from "react";

import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion"
 export const ClickAble = ({children}: {children: ReactNode}) => {
    const [scope, animate] = useAnimate()
    const [ hover, setHover] = useState(false);

    useEffect(() => {
        if(hover){
            animate([
                ["img", { scale: 1.1 }],
                [`.${ClickAble.borderHL}`, { boxShadow: "0px 0px 5px 5px rgba(211, 175, 89, 0.5)" }, { duration: 0 }],
                [`.${ClickAble.titleHL}`, { color: "#DDAF59" }, { duration: 0 }]
            ])
        }
        else{
            animate([
                ["img", { scale: 1 }],
                [`.${ClickAble.borderHL}`, { boxShadow: "0px 0px 0px 0px rgba(211, 175, 89, 0.5)" }, { duration: 0 }],
                [`.${ClickAble.titleHL}`, { color: "#222" }, { duration: 0 }]
            ])

        }
    }, [hover, animate])

    //
    return <motion.div style={{cursor: "pointer"}} ref={scope} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>
        {children}
    </motion.div>
 }

 ClickAble.titleHL = "title-height";
 ClickAble.borderHL = "border-highlight";