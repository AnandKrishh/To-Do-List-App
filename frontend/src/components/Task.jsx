import { useState } from 'react';
import axios from 'axios';
// import { v4 as uuidv4 } from "uuid";
import './Task.css';


export function Task({ taskId, task, tasks, setTasks }) {
    const [input, setInput] = useState(task);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleToggleClick = async () => {
        if (!isDisabled) {
            try {
                const response = await axios.put(`http://localhost:5000/update/${taskId}`, { task: input });
                console.log(response.data);

            } catch (err) {
                console.error(err);
            }
        }

        setIsDisabled(!isDisabled);
    }

    const handleDeleteClick = async() => {
        setTasks(tasks.filter(task => task.taskId !== taskId))
        try {
            await axios.delete(`http://localhost:5000/delete/${taskId}`)

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="task">
            <div className="task-content">
                <label>
                    <input
                        type="text"
                        className='input-box'
                        size="30"
                        value={input}
                        onChange={handleInputChange}
                        disabled={isDisabled}
                    />
                </label>
            </div>

            <div className="task-buttons">
                <button
                    className="task-toggle-button"
                    onClick={handleToggleClick}
                >
                    {isDisabled ? "Edit" : "Ok"}
                </button>

                <button
                    className="task-delete-button"
                    onClick={handleDeleteClick}
                >
                    ❌
                </button>
            </div>
        </div>
    );
}
