import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import './NewTask.css';

export function NewTask({ setTasks }) {
    const [newInput, setNewInput] = useState("");

    const handleChange = (e) =>{
        setNewInput(e.target.value);
    }

    const handleCreateClick = async() => {
        try {
            const response = await axios.post("http://localhost:5000/create", {task: newInput, taskId: uuidv4()})
            console.log(response);
            setTasks(response.data);
            setNewInput("");
        } catch (err) {
            console.error(err)
        }

        
    }

    return (
        <div className="newTask-container">
            <div className="newTask-content">
                <label>
                    <input
                        type="text"
                        placeholder="+ Add a new task..."
                        className='input-box'
                        size="30"
                        value={newInput}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <button 
                    className="newTask-create-button"
                    onClick={handleCreateClick}
                >
                    Create
                </button>
            </div>
        </div>
    );
}