import React, { useState, useEffect, useContext } from 'react';
import Themecontext from '../Context/ThemeContext';

const Card = props => {

    const [Todo, setTodo] = useState([]);
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      // fetch('https://rickandmortyapi.com/api/character/')
       .then(response => response.json())
        .then(data => setTodo(data)) 
        console.log(Todo[0]);
      const estado= Todo.completed;

    },[]);

    return (
       
          <ul >
            {Todo.map(oneTodo =>(
               <li className={oneTodo.completed?"Card":"CardRed"}>{oneTodo.title} 
                <p> Estado:  { oneTodo.completed? "Completado":"Sin completar"}</p>
                </li>
               
         ))}            
        </ul>
    
    );
};



export default Card;