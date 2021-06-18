import React, { useState } from "react";
import Note from "./component/Note";
import MakeNotes from "./component/MakeNotes";


import Header from "./component/header"
import './App.css';
import { render } from "@testing-library/react";

function App() {
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);

    
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

  function completeTask(id){
    setCount(count + 1)
    {notes.map((noteItem, index) => {
        if (index == id) {
            return (
                noteItem.completed = true
            ); 
        }
    })}
  }

  return (
    <div className="App">
    <Header/>

    <MakeNotes onAdd={addNote} />
            {notes.map((noteItem, index) => {
                let completionStatus = "Due"
                if (noteItem.completed) {
                    completionStatus = "Done"
                }
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        date={noteItem.date}
                        completed={completionStatus}
                        onDelete={deleteNote}
                        completeTask={completeTask} 
                    />
                );
            })}
    </div>
  );
}

export default App;
