
import React, { useState } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, get, remove, update } from "firebase/database";
import './Tododis.css'

function Tododisplay() {
    const [tasks, setTasks] = useState([]);
   
    const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "Task/GOBurn");
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setTasks(Object.values(snapshot.val()));
            } else {
                alert("No data found");
         }
       
    };

    const deleteTask = async (taskId) => {
            const db = getDatabase(app);
            const dbRef = ref(db, `Task/GOBurn/${taskId}`);
            await remove(dbRef);
            setTasks(tasks.filter(task => task.id !== taskId));
       
    };

    const completeTask = async (taskId) => {
            const db = getDatabase(app);
            const dbRef = ref(db, `Task/GOBurn/${taskId}`);
            await update(dbRef, { completed: true });
            setTasks(tasks.map(task => 
                task.id === taskId ? { ...task, completed: true } : task
            ));
    };

    return (
        <div>
           
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Text</th>
                        <th>Actions</th>
                        <th> <button onClick={fetchData}>Display Details</button></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((item, index) => (
                        <tr key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                            <td>{item.id}</td>
                            <td>{item.text}</td>
                            <td>
                                <button onClick={() => completeTask(item.id)}>Task Completed</button>
                                </td>
                                <td>
                                <button onClick={() => deleteTask(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tododisplay;

