import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import CreateArea from './components/CreateArea';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("react-notes-data"));
    if (storedNotes) setNotes((storedNotes)=>{
      return [...storedNotes];
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "react-notes-data",
      JSON.stringify(notes)
    );
  }, [notes]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      <div className="note-group">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
