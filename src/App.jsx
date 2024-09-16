import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { TodosState } from './store/atoms/TodosState'
import { useState } from 'react'
import { FilterState } from './store/atoms/FilterState'
import { TodosFilterState } from './store/atoms/TodosFilterState'

function App() {
  
  return (
    <RecoilRoot>
      <RenderButtons/>
      <RenderTodos/>
    </RecoilRoot>
  )
}

function RenderTodos() {
  const todos=useRecoilValue(TodosFilterState)
  return <div>
    {todos.map((todo)=>{
      return <div>
                <div>Title: {todo.title}</div>
                <div>Description: {todo.description}</div>
                <br />
             </div>
    })}
  </div>
}
function RenderButtons() {
  const [title,setTitle]=useState(' ')
  const [description,setDescription]=useState(' ')
  const [todos,SetTodos]=useRecoilState(TodosState);
  const setFilter=useSetRecoilState(FilterState);
  return <div>
    <input type="text"  placeholder='Enter Title of new ToDo' onChange={(e)=>{
      const value=e.target.value;
      setTitle(value);
    }} /> <br />
    <input type="text"  placeholder='Enter Description ' onChange={(e)=>{
      const value=e.target.value;
      setDescription(value)
    }} />&nbsp;&nbsp;
    <button onClick={()=>{

      SetTodos([...todos,{
        title:title,
        description:description}
      ])
    }}>Add Todo</button>

    &nbsp;&nbsp;&nbsp;
  
    <input type="text" placeholder='Input Filter words' onChange={(e)=>{
      const value=e.target.value;
      setFilter(value);
    }} /> 
    <br />
    <br />

  </div>
  
}

export default App
