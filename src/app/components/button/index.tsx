"use client";

import type {ReactNode} from "react";

import "./index.scss";

export const Button = ({children, suffix = null, type = "flat", onClick = () => {}}: {children: string, suffix?: ReactNode, type?: "flat" | "circle", onClick?: () => void;}) => {

    let className = "btn";
    if(type === 'circle'){
        className += " circle";
    }

    if(suffix){
        className += " suffix";
    }


    const handleClick = async () => {
        if(onClick){
            await onClick();
        }
    }

    return <button className={className} onClick={handleClick}>{children}{suffix}</button>
}