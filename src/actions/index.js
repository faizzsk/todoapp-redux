export const ADD_DATA = "ADD_DATA"
export const DELETE_DATA = "DELETE_DATA"
export const EDIT = "EDIT_DATA"


export const add_data = (data) => ({

    type : ADD_DATA,
    payload:data,
    id:Math.random(),
    flag:0
    
})


export const delete_data = (id) =>({

    type: DELETE_DATA,
    id : id ,
})


export const edit_data = (id) => ({

    type : EDIT,
    
    id:id
    
})
