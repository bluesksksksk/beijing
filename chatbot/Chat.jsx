import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import RequestForm from "./RequestForm";

function Chat() {
  const [chats, setChats] = useState([]);
  const chatContainerRef = useRef(null);

  // 显示 “处理中”
  const processingHandler = (req) => {
    const newChat = {
      request: req,
      response: "processing...",
    };
    setChats([...chats, newChat]);
  };

  // 将新 chat 加入列表
  const newChatHandler = (req, resp) => {
    const newChat = {
      request: req,
      response: resp,
    };

    setChats([...chats, newChat]);
  };

  // 自动滚动到最新一行 chat 信息
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo(
        0,
        chatContainerRef.current.scrollHeight,
      );
    }
  }, [chats]);

  return (
    <div>
      <div ref={chatContainerRef} className="chat-container">
        {/* 遍历展示 chat 信息 */}
        {chats.map((chat, index) => (
          <div key={index} className="row">
            <div className="col-1"></div>
            <div className="chat-request col-3">{chat.request}</div>
            <div className="chat-response col-6">{chat.response}</div>
            <hr />
          </div>
        ))}
      </div>
      <RequestForm onSubmit={newChatHandler} inProgess={processingHandler} />
    </div>
  );
}

export default Chat;
