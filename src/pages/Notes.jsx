import React from 'react'

export const Notes = () => {
  return (
    <div>
        <header className="notes__header">
            <h2>My Notes</h2>
            {/* <input type='text' autoFocus placeholder='Keyword...' /> */}
            <button className="btn">S</button>
            <div className="notes__container">
                    {
                        // dummyNotes.map(note =><NoteItem key={note.id}/>)
                    }
            </div>
            {/* <Link className="btn add__btn"></Link> */}
            <img></img>
        </header>
    </div>
  )
}
