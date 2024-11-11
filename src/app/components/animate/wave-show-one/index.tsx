"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

export const WaveShowOne = (props: {children: ReactNode, delay?: number}) => {
    const {delay, children} = props;

    return <motion.div initial={{ opacity: 0, y: 50}} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100, duration: 0.3, delay}}
    >
        {children}
    </motion.div>
}