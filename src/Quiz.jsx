import {decode} from 'html-entities';
import { useState } from 'react';

function Quiz(props){
 
   
 const arrOfAns = props.answers.map((ans,index) => (
  <button  className="ans" key={index}>{decode(ans)}</button>
 ))
 
  return(
  <div className="quiz--section">
   
    <h1>{decode(props.question)}</h1>
    <p>{arrOfAns}</p>
  </div>
  )
}

export default Quiz