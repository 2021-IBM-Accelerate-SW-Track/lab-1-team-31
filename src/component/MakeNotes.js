import React , {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import {FormControl, Container, TextField, Button} from '@material-ui/core'


function MakeNotes({onAdd, noteList}){

    const [isExpanded, setExpanded] = useState(false);
    var today = new Date();
    
    const [exist, setExist] = useState(false)
    const [field, checkField] = useState(false)

    //initial values 
    const [note, setNote] = useState({
        content: "",
        completed: false,
        time: today.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
        date: today.toLocaleDateString()
    });




    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    }

    function submitNote(event){
        if (!note.content){
            checkField(true)
            setExist(false)
            return
        }
        checkField(false)

        for (const eachNote of noteList){
            if (note.content.toLowerCase() === eachNote.content.toLowerCase()){
                setExist(true)
                checkField(false)
                return
            }
            setExist(false)
        }
        
        onAdd(note);


        //after click "add" button, remove typed messages
        setNote({
            //title: "",
            content: "",
            completed: false,
            time: today.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
            date: today.toLocaleDateString()
        })

        event.preventDefault(); //to prevent refreshing 
    }

    function expand(){
        setExpanded(true);
      }
    return (
        <div>
            <form className="create-note">
            
            {/* {isExpanded && (
                <input 
                    onChange={handleChange}
                    name="title"
                    value={note.title}
                    placeholder="Title"
                />
            )} */}
               <div data-testid="new-item-input">
                    <input 

                        onClick={expand}
                        onChange={handleChange}
                        name="content"
                        value={note.content}
                        placeholder="Take a note.."
                        row={isExpanded ? 2 : 1}
                    />
               </div>
                    
               <div>
                    {exist && 'Note Already Exist'}
                    {field && 'Please Add A Note'}
               </div>
                <div  data-testid="new-item-button">
                    <Zoom in={isExpanded}>
                        <Fab onClick={submitNote}><AddIcon /></Fab> 
                    </Zoom>
                </div>


            </form>

        </div>
    );
}

export default MakeNotes;
