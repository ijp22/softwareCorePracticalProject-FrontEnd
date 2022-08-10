import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Todo() {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/v1/todos/save', {
        title: `${title}`,
        description: `${description}`,
        userName: `${userName}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setTitle('');
    setDescription('');
    setUserName('');
  };

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete='off'>
      <div>
        <TextField
          id='input-with-icon-textfield'
          label='User Name'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          variant='standard'
        />
      </div>

      <div>
        <TextField
          id='outlined-basic'
          label='Add A Title'
          variant='outlined'
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <TextField
          id='outlined-basic'
          label='Add Description'
          variant='outlined'
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button variant='contained' color='success' onClick={handleClick}>
        Save Todo
      </Button>
    </Box>
  );
}
