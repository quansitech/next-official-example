"use client"

import NextImage from "next/image";


const imageLoader = ({src}: {src: string}) => {
    return src;
}

export const Image = ({
  src, 
  className = "", 
  alt = "", 
  mode = "fill",
  loading = "lazy",
  placeholder = "blur",
  onLoadingComplete
} : {
  src: string, 
  className?: string, 
  alt?: string, 
  mode?: "fill" | "contain" | "cover",
  loading?: "lazy" | "eager",
  placeholder?: "blur" | "empty",
  onLoadingComplete?: () => void
}) => {

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

    // 为blur占位符提供默认的blurDataURL
    const blurDataURL = placeholder === "blur" ? 
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9kfaUMk9kfaUMk9kfaUMk9kfXwThv/IAA=" 
      : undefined;

    return <div className={className} style={{position: "relative"}}>
        <div style={{height: "inherit", width: "inherit"}} />
        <NextImage 
          src={src} 
          loader={imageLoader} 
          alt={alt}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoadingComplete={onLoadingComplete}
          {...imageProps} 
        />
    </div>
}
