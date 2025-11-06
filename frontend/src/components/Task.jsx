import { useState } from 'react';
import { Fragment } from 'react';
import './Task.css';


export function Task({ taskId, task, tasks, setTasks}) {
    const [input, setInput] = useState(task);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleInputChange = (e) =>{
        setInput(e.target.value);
    }

    const handleToggleClick = ()=>{
        setIsDisabled(!isDisabled);
    }

    const handleDeleteClick = () => {
        setTasks(tasks.filter(task => task.taskId !== taskId))
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
