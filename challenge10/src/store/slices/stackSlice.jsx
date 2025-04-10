import { createSlice } from "@reduxjs/toolkit";

const stackSlice = createSlice({
    name:"stack",
    initialState: {
        items: [] // la pila se representa como un arreglo
    },
    reducers:{
        //agregar un nuevo elemento a la pila
        push: (state,action) =>{
            state.items.push(action.payload);
        },
        //eliminar el ultimo elemento de la pila
        pop: (state) => {
            state.items.pop();
        },
        clear: (state) =>{
            state.items= [];
        }
    }
});

export const {push,pop,clear} = stackSlice.actions;
export default stackSlice.reducer;