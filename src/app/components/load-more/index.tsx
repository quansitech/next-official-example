"use client";

import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion"

import "./index.scss";

interface LoadMoreProps {
  onLoadMore: () => Promise<void>;
  end: boolean;
  className?: string;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ onLoadMore, end = false, className="pallas-load-more" }) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const isInView  = useInView(innerRef);

  useEffect(() => {
    if (!end && isInView) {
      triggerLoadMore();
    }
  });

  const triggerLoadMore = async () => {
      await onLoadMore();
  }

  return (
    <div className={className} ref={innerRef}>
      {
        !end && <>
            <motion.i initial={{ rotate: 0}} animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                type: "tween"
              }} className={`iconfont icon-jiazai`} />
            <span className="loading-tips">加载中...</span>
        </>
      }
      {end && <div className="load-more-finished">已经到底了</div>}
      
    </div>
  );
}

