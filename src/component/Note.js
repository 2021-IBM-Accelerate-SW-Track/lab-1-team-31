import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Fab from '@material-ui/core/Fab';

function Note(props){

    function handleClick(){
        props.onDelete(props.id)
    }


    return (
        
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab className="delBtn" onClick={handleClick}>< HighlightOffIcon/></Fab>
        </div>
    );
}

export default Note;