import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import nav from "./nav.module.scss";
import avatar from "../../images/avatar.JPG";

export default function Nav() {
  const dispatch = useDispatch();
  //const darkmode = useSelector((state) => state.actions.dark__mode);

  const toggleDarkMode = (e) => {
    dispatch({ type: "DARK__MODE", payload: e.target.checked });
  };

  return (
    <nav className={nav.nav}>
      <div className={`${nav.user} bottom-border box-padding`}>
        <div className={nav.user__avatar}>
          <img src={avatar} alt="john doe" />
        </div>
        <h3 className={`${nav.user__displayname} headings`}>Jordan Durant</h3>
        <button className={nav.user__btn}>Action</button>
      </div>

      <section className={`${nav.nav__links} bottom-border box-padding`}>
        <h5 className={`${nav.section__title} text`}>Menu</h5>
        <ul className={nav.nav_links__}>
          <li className={nav.nav__link}>
            <Link className="text" to="/">
              Calendar
            </Link>
          </li>
          <li className={nav.nav__link}>
            <Link className="text" to="/">
              Tasks
            </Link>
          </li>
          <li className={nav.nav__link}>
            <Link className="text" to="/">
              Finance
            </Link>
          </li>
          <li className={nav.nav__link}>
            <Link className="text" to="/">
              Folders
            </Link>
          </li>
          <li className={nav.nav__link}>
            <Link className="text" to="/">
              <small>ICON</small>
              <span>Statistics</span>
            </Link>
          </li>
        </ul>
      </section>

      <section className={`${nav.categories} bottom-border box-padding`}>
        <h5 className={`${nav.section__title} text`}>Categories</h5>
        <div className={nav.categories__}>
          <Link to="/" className={nav.category}>
            School
          </Link>
          <Link to="/" className={nav.category}>
            People
          </Link>
          <Link to="/" className={nav.category}>
            People
          </Link>
          <Link to="/" className={nav.category}>
            Other
          </Link>
        </div>
      </section>

      <div className={`${nav.nav__actions} box-padding`}>
        <div className={nav.toggle__container}>
          <input
            className={nav.toggle__input}
            onClick={toggleDarkMode}
            defaultValue={false}
            type="checkbox"
            id="switch"
            name="theme"
          />
          <label className={`${nav.input__label} text`} htmlFor="switch">
            Toggle
          </label>
        </div>
        <Link to="/" className={`${nav.settings__link} text`}>
          Settings
        </Link>
      </div>
    </nav>
  );
}
