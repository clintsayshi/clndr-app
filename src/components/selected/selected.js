import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { MONTH__NAMES } from "../abstracts/enums";
import { DAY__NAMES } from "../abstracts/enums";
import Calendar from "../calendar/calendar";
import Tasks from "../tasks/tasks";
import select from "./selected.module.scss";

export default function Selected() {
  // current date
  const date = useSelector((state) => state.date.date);
  return (
    <div className={select.selected}>
      <header className={`${select.current__date} bottom-border box-padding`}>
        <h4 className={` text`}>
          {DAY__NAMES[date.getDay()].shortName} - {date.getDate()}{" "}
          {MONTH__NAMES[date.getMonth()]}
        </h4>
      </header>

      <Calendar />

      <Tasks />
    </div>
  );
}
