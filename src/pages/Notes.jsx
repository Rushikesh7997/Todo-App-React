import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
// import dummyNotes from "../dummy__notes";
import { NoteItem } from "../components/NoteItem";

export const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = () => {
    setFilterNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder="Keyword..."
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filterNotes.length == 0 && (
          <p className="empty__notes">No Notes Found</p>
        )}
        {filterNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};
