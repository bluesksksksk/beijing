import React from "react";
import Content from "./Content";
import Map from "../button/Map.jsx";
import { TOPIC_CONTENT, TOPICS } from "../../data/ContentData";

function Contents({ tabName }) {
  const topicIdx = TOPICS.indexOf(tabName);
  const contents = TOPIC_CONTENT[topicIdx];

  // TODO: Map 跳转功能待实现
  const goToHandler = (title) => {
    // const id = title.replace(/\s+/g, "-").toLowerCase();
    // console.log("Contents:", id);
  };

  return (
    <div className="m-5">
      {/* Map Icon 地图图标只在 "About Beijing", "Travel Tips" 显示 */}
      {tabName === "About Beijing" || tabName === "Travel Tips" ? (
        <Map topicIdx={topicIdx} goToSection={goToHandler} />
      ) : null}

      {contents.map((content, index) => (
        <div>
          <Content
            key={index}
            image={content.image}
            title={content.title}
            description={content.description}
            redirection={content.redirection}
            isOddRow={index % 2 ? "false" : "true"}
            // id={content.title.replace(/\s+/g, "-").toLowerCase()}
          />
          <hr style={{ color: "grey" }} />
        </div>
      ))}
    </div>
  );
}

export default Contents;
