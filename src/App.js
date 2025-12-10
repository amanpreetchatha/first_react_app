
import {useState} from 'react';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import InputComponent from './InputComponent';
import {Routes, Route, Link} from 'react-router-dom';

export default function App() {

  let [date,setDate] = useState(new Date());

  
  function handleClick(e) {
    setDate(new Date());
  }
  return (
    <div>
      <button onClick={handleClick}>{date.toLocaleTimeString()}</button> 
      <nav className="nav">
        <Link to="/TextInput" className="nav-item">Focus Button</Link>
        <Link to="/InputComp" className="nav-item">Input Component</Link>
      </nav>
      <Routes>
        <Route path="/TextInput" element={<TextInputWithFocusButton />} />
        <Route path="/InputComp" element={<InputComponent />} />
      </Routes>
      
    </div>
  );
}  
