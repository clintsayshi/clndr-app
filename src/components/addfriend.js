import React from "react";
import { useSelector, useDispatch } from "react-redux";
import m from "./addfriend.module.scss";

export default function AddFriend() {
  //
  const close = useDispatch();

  const closeModal = () => {
    close({ type: "ADDFRIEND__ACTIVE", payload: false });
  };

  return (
    <div className={`${m.modal__addfriend}`}>
      <h4 className={m.modal__header}>Search for new friends</h4>
      <input
        className={m.modal__inputtext}
        type="text"
        placeholder="Type a new friend's name..."
      />
      <div className={m.modal__actions}>
        <button className={`std__button ${m.modal__btn}`}>Add friend</button>
        <button onClick={closeModal} className={`std__button ${m.modal__btn}`}>
          Cancel
        </button>
      </div>
    </div>
  );
}
