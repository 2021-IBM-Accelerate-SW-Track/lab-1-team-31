import React from "react";
import Todo from "./todo"
const TodoList = ({ note, checkTodo, deleteTodo }) => {
   
    return (
        <div>
            {note.map((todo) => (
                <Todo 
                key = {todo.id} 
                title = {todo.title}
                checkTodo = {checkTodo} 
                deleteTodo = {deleteTodo}
                id = {todo.id} 
                completed = {todo.completed}
                date = {todo.date}
                time = {todo.time}/>
            ))}
            
        </div>
    )
}

export default TodoList;