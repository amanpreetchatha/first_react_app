
import {useState} from 'react';

export default function App() {

  let [date,setDate] = useState(new Date());

  
  function handleClick(e) {
    setDate(new Date());
  }
  return (
    <div>
      <p onClick={handleClick}>{date.toLocaleTimeString()}</p>
      <button onClick={handleClick}>{date.toLocaleTimeString()}</button>
      
    </div>
  );
}  



/*

import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 
  */