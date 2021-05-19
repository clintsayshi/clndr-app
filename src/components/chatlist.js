import React from "react";
import c from "./chatlist.module.scss";

import { useDispatch } from "react-redux";

function Chatlist() {
  return (
    <div className={c.chatlist__container}>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
}

export default Chatlist;

function Chat() {
  const chatActive = useDispatch();

  const openChat = () => {
    chatActive({ type: "CHAT__ACTIVE", payload: true });
  };
  return (
    <div onClick={openChat} className={c.chat}>
      <div className={c.chat__avatar}>RS</div>

      <div className={c.chat__preview}>
        <h4 className={`${c.chat__name}`}>Ron Swanson</h4>
        <p className={`${c.preview__text}`}>is too late for all that</p>
      </div>

      <small className={c.last_text__time}>10:12 AM</small>
    </div>
  );
}
