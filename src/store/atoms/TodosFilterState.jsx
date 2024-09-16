import { selector } from "recoil";
import { TodosState } from "./TodosState";
import { FilterState } from "./FilterState";

export const TodosFilterState=selector({
    key:'TodosFilterState',
    get:({get})=>{
       const todos=get(TodosState)
       const filter=get(FilterState)
       return todos.filter((todo)=>todo.title.includes(filter)||todo.description.includes(filter))
    }
})