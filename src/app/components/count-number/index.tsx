"use client";

import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import { useEffect } from "react";

export const CountNumber = ({children, className=""}: {children: string|number, className?: string}) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, typeof children === 'string' ? parseFloat(children) : children, { duration: 1.5 });

        return () => controls.stop();
    }, [children, count]);

    return <motion.div className={className}>{rounded}</motion.div>
}