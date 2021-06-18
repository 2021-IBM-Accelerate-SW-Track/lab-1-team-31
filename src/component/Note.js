import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoneIcon from '@material-ui/icons/Done';
import Fab from '@material-ui/core/Fab';

function Note(props){

    function handleClick(){
        props.onDelete(props.id)
    }

    function completeTaskHandler(){
        props.completeTask(props.id)
    }

    if (props.completed === "Done") {
        return (
        
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <p>Created on: {props.date}</p>
                <p>Status: {props.completed}</p>
                <Fab className="delBtn" onClick={handleClick}>< HighlightOffIcon/></Fab>
            </div>
        );    
    }
    return (
        
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>Created on: {props.date}</p>
            <p>Status: {props.completed}</p>
            <Fab className="delBtn" onClick={handleClick}>< HighlightOffIcon/></Fab>
            <Fab class="fas fa-check" onClick={completeTaskHandler}><DoneIcon/></Fab>
        </div>
    );
}

export default Note;