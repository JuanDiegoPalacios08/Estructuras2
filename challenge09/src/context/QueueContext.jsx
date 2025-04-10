import React, {createContext,useState} from 'react';
import {Person} from '../models/Person'

export const QueueContext = createContext();

export const QueueProvider =({children}) =>{
    const[queueItems, setQueueItems] = useState([]);

    const addPerson = (name,amount)=>{
        const newPerson = new Person(name,amount);
        setQueueItems(prevItems => [...prevItems,newPerson]);
    }

    return(
        <QueueContext.Provider value={{queueItems,addPerson}}>
            {children}
        </QueueContext.Provider>
    )
}