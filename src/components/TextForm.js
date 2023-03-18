import React, {useState} from 'react';

export default function TextForm(props) {

const handleupclick=()=>{
  setText(text.toUpperCase());
}

const handlelowerclick=()=>{
  setText(text.toLowerCase());
}
const handleOnChange=(event)=>{
  setText(event.target.value)
}
  const[text,setText]=useState("Enter the value you want to change");
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
      <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}} id="textbox" rows="8"></textarea>
    </div>
    <button className="btn btn-success mx-2" onClick={handleupclick}>Change to Uppercase</button>
    <button className="btn btn-success my-3" onClick={handlelowerclick}>Change to Lowercase</button>
    </div>
)}  
