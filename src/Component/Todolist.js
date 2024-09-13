import React, { useState } from 'react'
import app from "../firebaseConfig"
import {getDatabase,ref,set,push} from "firebase/database";
import Tododisplay from './Tododisplay';
import './Todolist.css'

function Todolist() {
    
    const[id,setId] = useState('')
    const[text,setText]= useState('')

const saveDetails=async()=>{
    const db = getDatabase(app);
    const newDb  = push(ref(db,"Task/GOBurn"));
    set(newDb,{
        id : id,
        text : text
    }).then(()=>{
        alert("Details saved succesfully")
        setId(" ");
        setText(" ")
    }).catch((err)=>{
        alert("Error",err.message);
    })
}

  return (
    <div>
    <div className='input'>
        <h1>GO BURN TASK : </h1> <br></br>
   <label> ID :  </label>
   <input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}/> 
   <label> Text : </label>
   <input type='text'  value={text} onChange={(e)=>{setText(e.target.value)}} /> 
     <button onClick={saveDetails} > Add Details </button>
     <br></br> <br></br><br></br><br></br><br></br>
    </div>
    <Tododisplay/>
    </div>
  )
}

export default Todolist
