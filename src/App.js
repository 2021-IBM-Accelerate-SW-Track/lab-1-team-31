import React, { useState } from "react";
import Note from "./component/Note";
import MakeNotes from "./component/MakeNotes";


import Header from "./component/header"
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

    
  function addNote(newNote){
      setNotes((prevNotes) => {
          return [...prevNotes, newNote];
      });
  }

  function deleteNote(id){
      setNotes((prevNotes) => {
          return prevNotes.filter((noteItem, index) => {
              return index !== id;
          });
      });
  }

  return (
    <div className="App">
    <Header/>

    <MakeNotes onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
    </div>
  );
}

export default App;
