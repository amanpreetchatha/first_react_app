
import {useState} from 'react';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import InputComponent from './InputComponent';

export default function App() {

  let [date,setDate] = useState(new Date());

  
  function handleClick(e) {
    setDate(new Date());
  }
  return (
    <div>
      <button onClick={handleClick}>{date.toLocaleTimeString()}</button>
      <TextInputWithFocusButton />
      <InputComponent />
    </div>
  );
}  
