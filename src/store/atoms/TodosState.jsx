import { atom } from "recoil";

export const TodosState=atom({
    key:"TodosState",
    default:[{title:'aniket',description:'aniket 1'},{title:'aniket2',description:'aniket 2'}]
})