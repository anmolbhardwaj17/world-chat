import React, { useState, useEffect } from 'react';
import {FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';

function App() {
const [input, setInput] = useState('');
const [messages, setMessages] = useState([]);
const [username, setUsername] = useState('');




useEffect(() => {
  //run when the app components loads
  db.collection('messages')
  .orderBy('timestamp', 'desc')
  .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
  })
}, [])

useEffect(() => {
  //run code here
  setUsername(prompt('Please enter your name'));
}, [] ) //conditon



// console.log(input);
// console.log(messages);

const sendMessage = (event) => {
  event.preventDefault();  //to prevent form from refreshing

  db.collection('messages').add({
    message: input,
    username: username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });

  //all the logic to send message goes here
  setInput('');
}

  return (
    <div className="App">
      <img className="msgicon" src="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/61-512.png" alt="img" />
      <h1>World Chat</h1>
      <h2>Hi {username || 'Unknown'}</h2>
      <p>Disclaimer: Anyone can send anything on this page, no one is responsible for anything</p>
    <div>
      <form className="app_form">
      <FormControl className="app_formcontrol">
        <InputLabel>Enter a message...</InputLabel>
        <Input className="app_input" value={input} onChange={event => setInput(event.target.value)} />

        <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
        </IconButton>
      </FormControl>
      </form>
      </div>
      

      <FlipMove className="start">
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>
      

    </div>
  );
}

export default App;
