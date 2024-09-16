import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { TodosState } from './store/atoms/TodosState'
import { useState } from 'react'

function App() {
  
  return (
    <RecoilRoot>
      <RenderButtons/>
      <RenderTodos/>
    </RecoilRoot>
  )
}

function RenderTodos() {
  const todos=useRecoilValue(TodosState)
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
  
  return <div>
    <input type="text"  placeholder='Enter Title of new ToDo' onChange={(e)=>{
      const value=e.target.value;
      setTitle(value);
    }} /> <br />
    <input type="text"  placeholder='Enter Description ' onChange={(e)=>{
      const value=e.target.value;
      setDescription(value)
    }} />
    <button onClick={()=>{

      SetTodos([...todos,{
        'title':{title},
        'description':{description}}
      ])
    }}>Add Todo</button>
  </div>
  
}

export default App
