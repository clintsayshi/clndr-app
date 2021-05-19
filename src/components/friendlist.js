import React from "react";
import c from "./chatlist.module.scss";

function ContactList() {
  return (
    <div className={c.chatlist__container}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default ContactList;

function Contact() {
  return (
    <div className={c.chat}>
      <div className={c.chat__avatar}>RS</div>

      <h4 className={`${c.chat__name}`}>Ron Swanson</h4>
    </div>
  );
}
