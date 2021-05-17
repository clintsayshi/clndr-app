import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import {} from "react"

import h from "./home.module.scss";
import back__icon from "../../assets/Button/Back.svg";

export default function Home() {
  // chat__active
  const chat__active = useSelector((state) => state.actions.chat__active);
  const chats__active = useSelector((state) => state.actions.chats__active);
  const friends__active = useSelector((state) => state.actions.friends__active);

  console.log(chat__active);

  const dispatch = useDispatch();

  const openchat = () => {
    dispatch({ type: "CHAT__ACTIVE", payload: true });
  };

  const closechat = () => {
    dispatch({ type: "CHAT__ACTIVE", payload: false });
  };

  return (
    <div className={h.home__main}>
      <div
        className={
          chat__active
            ? h.lists__container
            : `${h.lists__container} ${h.display__block}`
        }
      >
        <header className={h.header}>
          <h4 className="app-logo">Chatbox.</h4>
          <button className={`std__button ${h.chats__button}`}>chats</button>
          <button className={`std__button ${h.friends__button}`}>
            friends
          </button>
          <button className={`std__button ${h.logout__button}`}>logout</button>
        </header>

        <main>
          {chats__active && <small>chatslist here</small>}
          {friends__active && <small>friendslist here</small>}
          <button onClick={openchat}>Open chat</button>
        </main>
      </div>

      <div
        className={h.chat__container}
        className={
          chat__active
            ? `${h.chat__container} display-block`
            : h.chat__container
        }
      >
        <header className={h.header}>
          <button
            onClick={closechat}
            aria-label="Back"
            className={`${h.back__button}`}
          >
            <img aria-hidden="true" src={back__icon} alt="" />
          </button>
          <h4 className={`username`}>Username</h4>
          <button className={`std__button ${h.logout__button}`}>logout</button>
        </header>
        <main>
          <small>the chat converstion here</small>
        </main>
      </div>
    </div>
  );
}
