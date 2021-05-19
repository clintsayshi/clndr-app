import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import {} from "react"

import h from "./home.module.scss";
import back__icon from "../../assets/Button/back.svg";
import startchat__icon from "../../assets/Button/start__chat.svg";
import addfriend__icon from "../../assets/Button/add__friend.svg";
import AddFriend from "../../components/addfriend";
import Chatlist from "../../components/chatlist";
import ContactList from "../../components/friendlist";
import Chat from "../../components/chat";

export default function Home() {
  const ww = window.innerWidth;
  console.log(ww);
  // chat__active
  const chat__active = useSelector((state) => state.actions.chat__active);
  const chats__active = useSelector((state) => state.actions.chats__active);
  const friends__active = useSelector((state) => state.actions.friends__active);
  const addfriend__active = useSelector(
    (state) => state.actions.addfriend__active
  );

  console.log(chat__active);

  const dispatch = useDispatch();

  const openchat = () => {
    dispatch({ type: "CHAT__ACTIVE", payload: true });
  };

  const closechat = () => {
    dispatch({ type: "CHAT__ACTIVE", payload: false });
  };

  const viewContacts = () => {
    dispatch({ type: "FRIENDS__ACTIVE", payload: true });
  };

  const viewChats = () => {
    dispatch({ type: "CHATS__ACTIVE", payload: true });
  };

  return (
    <div className={h.home__main}>
      <div
        className={
          chat__active ? h.lists__col : `${h.lists__col} ${h.display__block}`
        }
      >
        <header className={h.header}>
          <h4 className="app-logo">Chatbox.</h4>
          <div className={h.lists__buttons}>
            <button
              onClick={viewChats}
              aria-label="Chats"
              className={`std__button ${h.chats__button}`}
            >
              <span>chats</span>
              <img aria-hidden="true" src={startchat__icon} alt="" />
            </button>
            <button
              onClick={viewContacts}
              aria-label="Friends"
              className={`std__button ${h.friends__button}`}
            >
              <span>friends</span>
              <img aria-hidden="true" src={addfriend__icon} alt="" />
            </button>
            <button className={`std__button ${h.logout__button}`}>
              logout
            </button>
          </div>
        </header>

        <main className={h.main}>
          {chats__active && <Chatlist />}
          {friends__active && <ContactList />}
        </main>
      </div>

      <div
        className={chat__active ? `${h.chat__col} display-block` : h.chat__col}
      >
        <header className={h.header}>
          <button
            onClick={closechat}
            aria-label="Back"
            className={`${h.back__button}`}
          >
            <img aria-hidden="true" src={back__icon} alt="" />
          </button>
          <div className={h.user__profile}>
            <div className={h.user__icon}>RS</div>
            <h4 className={`${h.username}`}>Ron Swanson</h4>
          </div>
          <button className={`std__button ${h.logout__button}`}>logout</button>
        </header>
        <main className={h.main}>
          {!chat__active && <small>hey babes</small>}
          {chat__active && <Chat />}
          <div className={h.chat_text__input}>
            <input
              placeholder="Type a message..."
              type="text"
              name="text"
              id={h.text__input}
            />
          </div>
        </main>
      </div>

      {addfriend__active && <div className={h.overlay}></div>}
      {addfriend__active && <AddFriend />}
    </div>
  );
}
