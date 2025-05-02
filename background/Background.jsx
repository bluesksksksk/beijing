import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Background.css";
import {
  CHINESE_TITLES,
  ENGLISH_TITLES,
  BACKGROUND_IMAGES,
} from "../../data/BackgroundData";
import { TOPICS } from "../../data/ContentData";

function Background() {
  // 根据 route 路径显示不同的页面 title
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const tabName = decodeURIComponent(currentPath.substring(1));
  const lowercasedTOPICS = TOPICS.map((element) => element.toLowerCase());
  const topicIdx = lowercasedTOPICS.indexOf(tabName);

  const [imageIdx, setImageIdx] = useState(0);

  // 每5秒钟更换背景
  useEffect(() => {
    // preload images for smooth display 预载图片
    for (let i = 0; i < BACKGROUND_IMAGES.length; i++) {
      const img = new Image();
      img.src = BACKGROUND_IMAGES[i];
    }

    const rotateBackgroundImage = () => {
      const nextIndex = (imageIdx + 1) % BACKGROUND_IMAGES.length;
      setImageIdx(nextIndex);
    };
    const interval = setInterval(rotateBackgroundImage, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [imageIdx, BACKGROUND_IMAGES]);

  return (
    <div
      id="bg-img"
      className="container-fluid"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGES[imageIdx]})`,
      }}
    >
      <p className="chinese-title">{CHINESE_TITLES[topicIdx]}</p>
      <h2 className="text-center">{ENGLISH_TITLES[topicIdx]}</h2>
      {/* <h3 id="name">&reg; 2023 一只_猫猫人🐱</h3> */}
    </div>
  );
}

export default Background;
