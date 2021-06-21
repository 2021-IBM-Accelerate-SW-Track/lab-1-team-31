import React, { useState } from "react";
import Note from "./component/Note";
import MakeNotes from "./component/MakeNotes";

import Header from "./component/header"
import './App.css';


function App() {
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditChange(event){
    setNotes({
      ...notes, 
    })
  }  

  function addNote(newNote){
      setNotes((prevNotes) => {
          return [...prevNotes, newNote];
      });
  }

  function editNote(notes){
    setIsEditing(true);
    setNotes({...notes});
  }

  function deleteNote(id){
      setNotes((prevNotes) => {
          return prevNotes.filter((noteItem, index) => {
              return index !== id;
          });
      });
  }

  function completeTask(id){
    setCount(count + 1);

    // eslint-disable-next-line array-callback-return
    notes.map((noteItem, index) => {
      if (index === id) {
        return (
          noteItem.completed = true
       ); 
      }
    }) 
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
                        //title={noteItem.title}
                        content={noteItem.content}
                        date={noteItem.date}
                        time={noteItem.time}
                        completed={completionStatus}
                        onDelete={deleteNote}
                        onEdit={editNote}
                        completeTask={completeTask} 
                    />
                );
            })}
    
    </div>
  );
}

export default App;
