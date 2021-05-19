import React from "react";
import { Link } from "react-router-dom";
import s from "./signin.module.scss";

import password__icon from "../../assets/Icon/password-see.jpg";

export default function Signin() {
  return (
    <div className={s.signin__up}>
      <h2>Chatbox.</h2>

      <form method="dialog">
        <div className={s.input__section}>
          <input type="email" name="email" className={s.input__text} />

          <div className={s.input__field}>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              id={s.password}
              className={s.input__text}
            />
            <button className={s.input__icon}>
              <img aria-hidden src={password__icon} alt="" />
            </button>
          </div>

          <button className={`${s.signinup__btn}`}>
            <Link to="/">login</Link>
          </button>
        </div>

        <div className={s.actions}>
          <p>Don't have an account ?</p>
          <button className={s.signinup__link}>
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
