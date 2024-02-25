import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const CreateNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary">Save</button>
      </header>
      <form action="" className="create-note__form">
        <input type="text" placeholder="Title" autoFocus />
        <textarea
          placeholder="Write Note Here"
          rows="28"
        ></textarea>
      </form>
    </section>
  );
};
