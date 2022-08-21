import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoListStyles.css';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  // Using Axios
  const handleClick = (id) => {
    axios.delete(`http://localhost:8080/api/v1/todos/${id}`);
  };

  // Using Fetch
  
  //should of use async await in here.
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/todos')
      .then((res) => res.json())
      .then((result) => {
        setTodoList(result);
      });
  }, [todoList]);

  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <ListItem>
            <Avatar sx={{ bgcolor: 'lightcoral', mr: 2, fontSize: 12 }}>User</Avatar>
            <ListItemText primary={todo.title} secondary={todo.description} />
            <ListItemAvatar>
              <Avatar id='createIcon'>
                <CreateIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemAvatar>
              <Avatar id='deleteIcon'>
                <DeleteIcon onClick={() => handleClick(todo.id)} />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </div>
      ))}
    </List>
  );
}
