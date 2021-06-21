import React , {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import {FormControl, Container, TextField, Button} from '@material-ui/core'


function MakeNotes(props){

    const [isExpanded, setExpanded] = useState(false);
    var today = new Date();

    //initial values 
    const [note, setNote] = useState({
       // title : "",
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
        props.onAdd(note);


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
            {/* <form className="create-note" onSubmit = {submitNote}>
                <TextField label = "eg. make coffee" required = {true} 
					value = {note.content} onChange = {handleChange}
					data-testid = "new-item-input" onClick={expand} row={isExpanded ? 2 : 1}/>
                <textarea 
                    type = "input"
                    required = {true}
                    onClick={expand}
                    onChange={handleChange}
                    name="content"
                    value={note.content}
                    placeholder="Take a note.."
                    row={isExpanded ? 2 : 1}
                    data-testid = "new-item-input"
                />

                <Zoom in={isExpanded}>
                   <Button type = "submit" data-testid = "new-item-button"><AddIcon /> </Button>
                </Zoom>

            </form> */}

			<form className="create-note" onSubmit = {submitNote}>
				<FormControl fullWidth = {true}>
					<TextField label = "eg. make coffee" 
                        required = {true}
                        onClick={expand}
                        onChange={handleChange}
                        name="content"
                        value={note.content}
                        placeholder="Take a note.."
                        row={isExpanded ? 2 : 1}
                        data-testid = "new-item-input"
                    />
					<Button 
                        variant = "contained" 
                        type = "submit"
                        style = {{marginTop: 5}} 
                        data-testid = "new-item-button">
						<AddIcon/>
					</Button>
				</FormControl>
			</form>
        </div>
    );
}

export default MakeNotes;