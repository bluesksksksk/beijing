import React, { useState } from "react";
import Icon from "../../assets/icons/map-regular.svg";
import "./Map.css";
import { TOPIC_CONTENT } from "../../data/ContentData";

function Map({ topicIdx, goToSection }) {
  const content = TOPIC_CONTENT[topicIdx];
  const [sectionsVisible, setSectionsVisible] = useState(true);

  // 根据 map 图标点击展开/关闭信息栏
  const toggleHandler = () => {
    setSectionsVisible(!sectionsVisible);
  };

  // TODO: feature 待实现
  const hrefHandler = (section) => {
    goToSection(section);
  };

  return (
    <div>
      <img id="map-icon" src={Icon} alt="map-icon" onClick={toggleHandler} />
      <div
        id="sections"
        className="row"
        style={{
          visibility: sectionsVisible ? "visible" : "hidden",
          height: sectionsVisible ? "auto" : 0,
        }}
      >
        {content.map((info, index) => (
          <div className="section-link col-sm-6 col-md-4" key={index}>
            <a onClick={hrefHandler}>{info.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Map;
