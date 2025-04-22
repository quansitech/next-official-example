"use client";

import type { ReactNode } from "react";

import { useEffect, useRef } from "react";
import { useAnimate, useInView} from "framer-motion"

export const InviewShow = ({once = true, children} : {once?: boolean, children: ReactNode}) => {

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const init = useRef(false);
  
  useEffect(() => {
    const animateFn = async () => {
      if (isInView && !init.current) {
        // await animate(scope.current, { opacity: 0, scale: 0.5 }, { duration: 0.25})
        animate(scope.current, { opacity: 1, scale: [0,1] }, { duration: 0.25 })
        // await animate(scope.current, { opacity: 0, scale: 0.5 }, { duration: 0.15})
        // await animate(scope.current, { opacity: 1, scale: 1 }, { duration: 0.15 })

        if(once){
          init.current = true;
        }
      }
    }

    animateFn();
     
  }, [isInView, animate, scope, once])

  return <div style={{ opacity: 0, width: "inherit"}} ref={scope}>{children}</div>
}