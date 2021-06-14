import React from "react"
import {connect} from "react-redux"
import { todos } from "../reducer/todos"
import { useDispatch, useSelector } from "react-redux";
const List = (props) =>{

    const state = useSelector((state) => state.data);
    console.log("de",state);
  

   return(
       <div>
        <ul>
            {/* {props.state.map((data,index)=>(
<li key={index}>{data.payload}</li>
            ))} */}
        </ul>
        </div>
    )



}

// const mapStateToProps = (state) => ({

//   todo : state.todos.data

// })

export default (List);