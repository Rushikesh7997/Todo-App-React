import React from "react";
import { Link } from "react-router-dom";

export const NoteItem = ({ note }) => {
  return (
    <div>
      <Link to={`/edit-note/${note.id}`} className="note"></Link>
      <h4>{note.title}</h4>
      <p>{note.date}</p>
    </div>
  );
};
