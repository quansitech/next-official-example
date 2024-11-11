"use client"

import NextImage from "next/image";


const imageLoader = ({src}: {src: string}) => {
    return src;
}

export const Image = ({src, className = "", alt = "", mode = "fill"} : {src: string, className?: string, alt?: string, mode?: "fill" | "contain" | "cover"}) => {

    let imageProps = {};
    if(mode === "fill") {
        imageProps = {fill: true};
    }

    if(mode === "contain") {
        imageProps = {fill: true, sizes: "100vw", style: {objectFit: "contain"}};
    }

    if(mode === "cover"){
        imageProps = {fill: true, sizes: "100vw", style: {objectFit: "cover"}};
    }

    return <div className={className} style={{position: "relative"}}>
        <NextImage src={src} loader={imageLoader} alt={alt}  {...imageProps} />
    </div>
}