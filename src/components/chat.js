import React from "react";
import c from "./chat.module.scss";

export default function Chat() {
  return (
    <div className={c.chat}>
      <div className={`${c.texts__group}`}>
        <small className={c.group__by}>Thur, 06 December</small>

        <div className={`${c.chat__text} ${c.text__received}`}>
          <p>hey...</p>
        </div>
        <div className={`${c.chat__text} ${c.text__received}`}>
          <p>been a while wena sfebe duwe</p>
        </div>
        <div className={`${c.chat__text} ${c.text__sent}`}>
          <p>
            hello how are u my baby my bay by my bay of all babies in the world
            i loves you
          </p>
        </div>
        <div className={`${c.chat__text} ${c.text__sent}`}>
          <p>i hate double texting but not when it comes to you</p>
        </div>
      </div>
      <div className={`${c.texts__group}`}>
        <small className={c.group__by}>Thur, 06 December</small>

        <div className={`${c.chat__text} ${c.text__received}`}>
          <p>hey...</p>
        </div>
        <div className={`${c.chat__text} ${c.text__received}`}>
          <p>been a while wena sfebe duwe</p>
        </div>
        <div className={`${c.chat__text} ${c.text__sent}`}>
          <p>
            hello how are u my baby my bay by my bay of all babies in the world
            i loves you
          </p>
        </div>
        <div className={`${c.chat__text} ${c.text__sent}`}>
          <p>i hate double texting but not when it comes to you</p>
        </div>
      </div>
    </div>
  );
}
