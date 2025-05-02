import React, { useState } from "react";
import "./RequestForm.css";
import sendIcon from "../../assets/icons/send-icon.png";
import { API_KEY, CHATGPT_ENDPOINT } from "../../credentials";

function RequestForm(props) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const commentEnterSubmit = (event) => {
    if (event.key === "Enter" && event.shiftKey == false) {
      sendRequestHandler();
    }
  };

  // 调用 OpenAI ChatGPT API
  const sendRequestHandler = () => {
    if (inputValue.length > 0) {
      // 显示“进行中”
      props.inProgess(inputValue);
      const data = {
        model: "gpt-3.5-turbo",
        // 注: 当前示例为无状态沟通. 如果想要有状态的chat, 附上过往交流信息即可
        messages: [
          {
            role: "user",
            content: inputValue,
          },
        ],
      };

      fetch(CHATGPT_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          props.onSubmit(inputValue, data.choices[0].message.content);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      setInputValue(""); // 清除 textarea 内容
    }
  };

  return (
    <div className="request-div">
      <form className="request-form">
        <textarea
          placeholder="Enter your question here to start 🐱"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={commentEnterSubmit}
        />
        <img src={sendIcon} onClick={sendRequestHandler} />
      </form>
    </div>
  );
}

export default RequestForm;
