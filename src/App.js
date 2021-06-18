import React, {useState} from "react";
import './App.css';
import DenseAppBar from "./appBar";
import TodoForm from './component/todo/todoForm';
import TodoList from './component/todo/todoList';
import { v4 as uuid } from 'uuid';

function buttonHandler() {
  alert('clicked')
}

function App() {
  var today = new Date();
  const [note, setNote] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuid(),
      title: text,
      content: "",
      completed: false,
      date: (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear(),
      time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
    setNote([...note, newTodo]);
  }

    const checkTodo = (id) => {
      setNote(note.map(task => {
        if (id === task.id) task.completed = !task.completed;
        return task;
      }))
    }

    const deleteTodo = (id) => {
      setNote(note.filter(todo => todo.id !== id))
    }

		return (
			<div className="App">
				<DenseAppBar />
				<br />
				<TodoForm addTodo = {addTodo}/>
				<TodoList note = {note} checkTodo = {checkTodo} deleteTodo = {deleteTodo}/>
			</div>
		);
};



export default App;
