import React from "react"
import { act } from "react-dom/test-utils"
import { createStore } from "redux"
import todoReducers from "."
import { add_data, delete_data, EDIT } from "../actions"
import {ADD_DATA} from "../actions"
import {DELETE_DATA} from "../actions"

const intialState={
    task :[]

}

 const todos = (state = intialState,action)=>{

    switch(action.type)
    {
        
        case ADD_DATA:
        
        
        return { 

            
            ...state,task:[...state.task, 
                {id:action.id, 
                    title:action.payload}
                ]};

         case DELETE_DATA:
            const todo = state.task.filter((todo,index)=> todo.id != action.id)
        //    const todo1 = state.task
        //console.log(todo1);
          //  state.task.splice(action.id,1)
            //console.log("after ",todo1);

           // console.log(todo);
            return {
                ...state,
                task:todo
            };

            case EDIT :
             ////   var todo1 = state.task
             //    todo1.splice(action.id,0)
    // this.setState({
    //     arr : array,
    //     })
   // console.log("edit",todo1);

                return{
                    ...state,
                    task: state.task.map((data,i)=>{
                        return data.id === action.id ?
                        {...data, title:action.payload}
                        : data
                    })
                }

            default: return state;

        //  default: return state

    }

}

const store = createStore(todos,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store