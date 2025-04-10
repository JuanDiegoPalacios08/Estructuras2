import React, {useContext} from 'react';
import { QueueContext } from '../context/QueueContext';

const QueueList = () =>{
    const {queueItems} = useContext(QueueContext);

    return(
        <div>
            <h2>Cola:</h2>
            {queueItems.length === 0?(
                <p>No hay personas en la cola.</p>
            ):(
                <ul>
                    {queueItems.map((person,index)=>(
                        <li key={index}>{person.toString()}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default QueueList;