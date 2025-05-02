import React from "react";
import "./Content.css";
import RedirectButton from "../button/RedirectButton";

function Content({ image, title, description, redirection, isOddRow }) {
  return (
    // 每一行内容交错展示, 奇数行文字先行, 偶数行图片先行
    <div className="content">
      {isOddRow === "true" && (
        <>
          <div className="left col-6">
            <h3>{title}</h3>
            <div className="description">{description}</div>
            {redirection && <RedirectButton>{redirection}</RedirectButton>}
          </div>
          <div className="right-image col-3">
            <img src={image} alt={title} />
          </div>
        </>
      )}
      {isOddRow === "false" && (
        <>
          <div className="left col-3">
            <img src={image} alt={title} />
          </div>
          <div className="right-info col-6">
            <h3>{title}</h3>
            <div className="description">{description}</div>
            {redirection && <RedirectButton>{redirection}</RedirectButton>}
          </div>
        </>
      )}
    </div>
  );
}

export default Content;
