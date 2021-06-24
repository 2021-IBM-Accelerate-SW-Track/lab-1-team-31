import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';


function Note(props){

    function handleClick(){
        props.onDelete(props.id)
    }

    function completeTaskHandler(){
        props.completeTask(props.id)
    }

    function handleEdit(){
        props.onEdit(props.id)
    }

    if (props.completed === "Done") {
        return (
        
            <div className="note">
                {/* <h1>{props.title}</h1> */}
                <p>{props.content}</p>
                <p>Created on: {props.date} at: {props.time}</p>
                <p>Status: {props.completed}</p>
                <Fab className="delBtn" onClick={handleClick}>< HighlightOffIcon/></Fab>
            </div>
        );    
    }
    return (
        
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>Created on: {props.date} at: {props.time}</p>
            <p>Status: {props.completed}</p>

            <Fab  onClick={handleClick}>< HighlightOffIcon/></Fab>

            <Fab onClick={handleEdit}>< EditIcon/> </Fab>
            
            <Fab onClick={completeTaskHandler}> < CheckIcon/> </Fab>
            
        </div>
    );
}

export default Note;
