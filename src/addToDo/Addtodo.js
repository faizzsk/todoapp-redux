import React from "react"
import { connect } from "react-redux"
import { add_data, delete_data, edit_data } from "../actions"
import "C:/Users/my pc/Desktop/React/todo-app-redux/node_modules/bootstrap/dist/css/bootstrap.css"
import { todoReducers } from "../reducer/"
import { useDispatch, useSelector } from "react-redux";
import {todos} from "../reducer/todos"
const Addtodo = (props)=>
{
    const task = useSelector(state => state.task);
    console.log("ANd :-",task);
    const dispatch = useDispatch();

        return (

            <div class="container">

                <form 
                onSubmit ={(event)=>{
                        event.preventDefault()
                        let input = event.target.userInput.value
                        console.log(input);
                        dispatch(add_data(input))
                        event.target.userInput.value=""
                    
                }}>
                    <input type="text" name ="userInput"></input>
                    <button>Add</button>
                </form>
                <br></br>

            
                <table class="table ">
                <thead class="thead-dark">

        <tr>
          
          <th scope="col">Sr No </th>
          <th scope="col">Task </th>
          <th scope="col">Action </th>
        </tr>
        </thead>

        {task.map((obj, i) => {
          return (
            <tr>
              <th>{++i} </th>
              <th>{obj.title} </th>
              <th>
                <button  class="btn btn-success" onClick={()=>{
                 
                  dispatch(edit_data(obj.id))
                }}> Edit</button>
                <button class="btn btn-dark" onClick={(event)=>{
                    event.preventDefault()
                    dispatch(delete_data(obj.id))
                }}> Delete </button>

              </th>
            </tr>
          );
        })}

      </table>                

            
          

                
                
            </div>
        )
}

export default (Addtodo)