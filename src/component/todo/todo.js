import React from 'react';
import {Card, CardContent, Typography, Container, IconButton} from '@material-ui/core'
import { Check, Delete } from '@material-ui/icons'
const Todo = ( {title, checkTodo, id, completed, deleteTodo, date, time} ) => {
    const markComplete = () => checkTodo(id)
    const delTodo = () => deleteTodo(id)
    const todoStyle = completed ? {textDecoration: "line-through"} : {textDecoration: "none"};
    return (
        <div>
            <Container>
                <Card variant = "outlined" style = {{marginTop: 35, background: "lightgrey"}}>
                    <CardContent>
                        <Typography variant = "h5" component = "h2" style = {todoStyle}>
                            <IconButton onClick = {markComplete} style = {{float: "left"}}>
                                <Check style = {{color: "green" }}/>
                            </IconButton>
                            {title}
                            <br />
                            {date}{" "}{time}
                            <IconButton onClick = {delTodo} style = {{float: "right"}}>
                                <Delete style = {{color: "red" }}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}


export default Todo;