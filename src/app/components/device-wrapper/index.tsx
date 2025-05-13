"use client";

import type {ReactNode} from "react";

import { useEffect, useState } from "react";
import {getWindowWidth} from "@/app/utils/device";

type DeviceWrapperProps = {
    desktop: ReactNode,
    mobile: ReactNode
}

export const DeviceWrapper = ({desktop, mobile}: DeviceWrapperProps) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(getWindowWidth() < 750);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>
        {isMobile ? mobile : desktop}
    </>;
}