"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion} from "framer-motion"
import {Image} from "@/app/components/image"
import "./index.scss"
export const LoadingMask = () => {
    const [inited, setInited] = useState(false)

    useEffect(() => {
        setInited(true);
    }, [])

    return <AnimatePresence>{
        !inited && <motion.div className="loading-mask" 
            initial={{ opacity: 1 }}
            transition={{
                delay: 0.7
            }}
            exit={{ opacity: 0 }}
            >
            <Image src="/favicon.ico" alt="Loading..." className="loading-favicon" />
        </motion.div>
    }</AnimatePresence>
}
