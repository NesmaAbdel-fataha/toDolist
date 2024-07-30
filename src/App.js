
import { useState } from 'react';
import './App.css';

function App() {
const [newItem , setNewItem]=useState("") //return value from input
const [todos , setTodos] = useState([])
const handleSubmit = (event)=>{
  event.preventDefault();
  console.log("form submited")
  //to add more than item : make function return new value
  setTodos((currentTodos)=>[...currentTodos,{id:crypto.randomUUID(),title:newItem, completed:false}])
  setNewItem("")
}
//console.log(todos)
//modified todo this id using the new value(completed)
const toggleTodo =(id,completed)=>{
setTodos((currentTodos)=>{
  return currentTodos.map((todo)=>{
    if(todo.id === id){
      return{...todo , completed}
    }else{
      return todo
    }
  })
})
}
//when click btn delete return all elements ecxpet the element which i clicked it
const deleteTodo = (id)=>{
  setTodos((currentTodos)=>{
    return currentTodos.filter((todo)=>todo.id!==id)
  })
}

  return (
   <>
   
    <form onSubmit={handleSubmit} className='new-item-form'>
<div className='form-low'>
<label htmlFor='item'>Todo Application</label>
<input type='text' value={newItem} onChange={event => setNewItem(event.target.value)} id='item'/>
<button className='btn'>Add</button>
</div>
    </form>
    <h1 className='header'>Your Todo List</h1>
    
    <ul className='list'>
     
      {todos.map(todo=><li key={todo.id}>
  <label>
  <input type='checkbox' className='todo-checkbox' checked={todo.completed} onChange={(e)=>toggleTodo(todo.id,e.target.checked)}/>
  {todo.title}
  </label>
  <button onClick={()=>deleteTodo(todo.id)} className='btn-delete btn-danger'>Delete</button>
  </li>)}
  {todos.length===0 && <h4>No Todos Found</h4>}
    </ul>
    
   </>
  );
}

export default App;
