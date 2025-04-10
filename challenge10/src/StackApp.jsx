import { useSelector,useDispatch } from "react-redux";
import {push,pop,clear} from "./store/slices/stackSlice.jsx";
import { useState } from "react";

export const StackApp = () =>{
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.stack);
    const [newItem, setNewItem] = useState("");

    const handlePush = () => {
        if(newItem.trim() !== ""){
            dispatch(push(newItem));
            setNewItem("");
        }
    };

    return(
        <div>
            <h2>Stack</h2>
            <input 
            type="text"
            value={newItem}
            onChange={(e)=> setNewItem(e.target.value)}
             />
        </div>
    )
}