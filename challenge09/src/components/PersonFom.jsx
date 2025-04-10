import React, {useState,useContext} from 'react';
import { QueueContext } from '../context/QueueContext';

const PersonForm = () =>{
    const [name,setName] = useState('');
    const [amount,setAmount] = useState('')
    const { addPerson }= useContext(QueueContext);

    const handleSubmit= (e) => {
        e.preventDefault();
        if(name.trim() === '' || amount.trim() === '')return;
        addPerson(name,amount);
        setName('');
        setAmount('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label >Nombre:</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Ingresa el nombre'
                 />
            </div>
            <div>
                <label>Amount</label>
                <input 
                type="text"
                value={amount}
                onChange={(e)=> setAmount(e.target.value)}
                placeholder='Ingresa la cantidad' />
            </div>
            <div>
                <button type='submit'>Agregar Persona</button>
            </div>
        </form>
    )
}

export default PersonForm;