import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Input() {

    let [input, setInput] = useState('');

    function changeHandler(e){
        setInput(e.target.value);
        console.log(e.target.value);
    }

    function submitHandler(e){
        // e.preventDefault();
        axios.post('http://localhost:8080/input', {input});
        setInput("");
    }

  return (
    <div>
        <h1>Input</h1>
        <input type="text" name="inputvalue" value={input} placeholder="enter any value" onChange={changeHandler}/> <br></br>
        <button type="submit" onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Input