import React from "react";
import Child from "./Child";
import { useState } from "react";

const Parent = () =>{
    const [category, setCategory] = useState('');
    const [categories,setCategories] = useState([]);

    const handleInputChange = (event) =>{
        setCategory(event.target.value)
    };

    const handleAddCategory =() =>{
        if(category.trim() !== ''){
            setCategories([...categories,category]);
            setCategory('');
        }
    }

    return(
        <div>
        <h1>Categorias</h1>
        <input 
        type="text"
        value={category}
        onChange={handleInputChange}
        placeholder="Escribe una categoria" />
        <br />
        <div>
            <button onClick={handleAddCategory}>
                Agregar Categoria
            </button>
        </div>

        <div>
            <Child categories={categories}></Child>
        </div>
        </div>
    )
}
    
export default Parent;