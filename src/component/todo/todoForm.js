import React, { useState } from 'react';
import {FormControl, Container, TextField, Button} from '@material-ui/core'
import Header from "../header/header"
import AddIcon from '@material-ui/icons/Add';
import './todoList.css';

const TodoForm = ({addTodo}) => {
	const [text, setText] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		addTodo(text);
		setText("")
	}
	return (
		<Container maxWidth = "sm">
			<form onSubmit = {handleSubmit}>
				<FormControl fullWidth = {true}>
					<TextField label = "eg. make coffee" required = {true} 
					value = {text} onChange = {e => setText(e.target.value)}
					data-testid = "new-item-input" />
					<Button variant = "contained" color = "primary" type = "submit"
					style = {{marginTop: 5}} data-testid = "new-item-button">
						<AddIcon/> Add
					</Button>
				</FormControl>
			</form>
		</Container>
	)
}

export default TodoForm;