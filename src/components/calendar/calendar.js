import React, { useState } from "react";

import { MONTH__NAMES } from "../abstracts/enums";
import { DAY__NAMES } from "../abstracts/enums";
import cal from "./calendar.module.scss";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthDays = (
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    startDay = 1
  ) => {
    const date = new Date();
    date.setDate(startDay);
    date.setMonth(month);
    date.setFullYear(year);

    const monthDays = [];
    let a = 1;
    let lastday = 1;
    while (date.getMonth() === month) {
      date.setDate(a);
      lastday = a;
      a++;
    }
    lastday = lastday - 1;

    for (let day = startDay; day <= lastday; day++) {
      monthDays.push({
        index: day,
      });
    }

    return monthDays;
  };

  function PrintMonth({ month }) {
    const current = currentDate;
    current.setDate(1);
    const firstDay = current.getDay() + 1;

    return (
      <div className={cal.calender}>
        <header
          className={`${cal.days} top-border bottom-border box-padding-sv`}
        >
          {DAY__NAMES.map((day) => (
            <h6 className={`${cal.day__label} text`} key={day.shortName}>
              {day.shortName}
            </h6>
          ))}
        </header>

        <div className={`${cal.days} bottom-border box-padding`}>
          {month.map((day, indx) => {
            return (
              <button
                style={
                  day.index === 1 ? { gridColumn: firstDay } : { margin: 0 }
                }
                className={`${cal.day} text`}
                key={indx}
              >
                {day.index}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function prevMnth() {
    setCurrentDate((prev) => {
      const date = new Date();
      date.setDate(1);
      date.setFullYear(prev.getFullYear());
      let month = 12;
      if (month < 0) {
        date.setFullYear(prev.getFullYear() - 1);
      } else {
        month = prev.getMonth() - 1;
      }
      date.setMonth(month);
      return date;
    });
  }

  function nextMnth() {
    setCurrentDate((prev) => {
      const date = new Date();
      date.setDate(1);
      date.setFullYear(prev.getFullYear());
      let month = 0;
      if (month > 12) {
        date.setFullYear(prev.getFullYear() + 1);
      } else {
        month = prev.getMonth() + 1;
      }
      date.setMonth(month);
      return date;
    });
  }

  return (
    <div className={`top__border bottom__border`}>
      {/* <button onClick={prevMnth}>previous month</button>
      <button onClick={nextMnth}>next month</button> */}
      <section>
        <div className={`${cal.months} box-padding-sv`}>
          {MONTH__NAMES.map((mnth) => (
            <button className={`${cal.month} text`}>{mnth}</button>
          ))}
        </div>
        <PrintMonth month={getMonthDays(currentDate.getMonth())} />
      </section>
    </div>
  );
}
