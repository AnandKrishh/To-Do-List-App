import { Task } from './Task.jsx'

export function TaskContainer({ tasks, setTasks}){
    return (
        <div className="task-container">
            {
                tasks.map((task)=>{
                    return <Task 
                        key={task.taskId} 
                        taskId={task.taskId}
                        task={task.task} 
                        tasks={tasks} 
                        setTasks={setTasks}
                    />
                })
            }
        </div>
    );
}