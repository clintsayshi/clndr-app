import React from "react";

import mn from "./main.module.scss";
const hours = [
  {
    time: 15,
  },
  {
    time: 16,
  },
  {
    time: 17,
    events: [
      {
        title: "Developer's feedback",
      },
    ],
  },
  {
    time: 18,
    events: [
      {
        title: "Developer's feedback",
      },
    ],
  },
];

export default function Main() {
  //
  const day = () => {
    {
      hours.map((hr, indx) => (
        <Hour key={indx} hr={hr.time} content={hr.events} />
      ));
    }
  };

  return (
    <div className={`${mn.main} left-border right-border`}>
      <div className={mn.day}>
        {hours.map((hr, indx) => {
          if (new Date().getHours() === hr.time) {
            return (
              <Hour key={indx} hr={hr.time} content={hr.events} now={true} />
            );
          } else {
            return <Hour key={indx} hr={hr.time} content={hr.events} />;
          }
        })}
      </div>
    </div>
  );
}

const Hour = ({ hr, now, content }) => {
  return (
    <div className={`${mn.hour}`}>
      <small className={now ? `${mn.today} bg-color` : `${mn.today}`}></small>
      <p className={`  text ${now && "bold-text"}`}>{hr}:00</p>
      <div className={`${mn.hour__content} ${now && "large_top__border"}`}>
        {content &&
          content.map((e, indx) => (
            <div key={indx} className={mn.event}>
              <h4>{e.title}</h4>
              <p>buy tickets first!!!</p>

              <small>#Join</small>
            </div>
          ))}
      </div>
    </div>
  );
};
