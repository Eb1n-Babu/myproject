import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/todos/')
            .then(response => {
                console.log('Fetched tasks:', response.data);
                setTasks(response.data);
                setError(null);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error.response || error.message);
                setError('Failed to fetch tasks: ' + (error.response?.statusText || error.message));
            });
    }, []);

    const addTask = () => {
        if (!newTask.trim()) {
            console.log('No title entered');
            setError('Task title cannot be empty.');
            return;
        }
        console.log('Sending POST with:', { title: newTask, completed: false });
        axios.post('http://localhost:8000/api/todos/', { title: newTask, completed: false })
            .then(response => {
                console.log('Added task:', response.data);
                setTasks([...tasks, response.data]);
                setNewTask('');
                setError(null);
            })
            .catch(error => {
                const errorMsg = error.response
                    ? `Error adding task: ${error.response.status} ${error.response.statusText} - ${JSON.stringify(error.response.data)}`
                    : `Error adding task: ${error.message}`;
                console.error(errorMsg);
                setError(errorMsg);
            });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Task List</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                placeholder="Enter a task"
                style={{ marginRight: '10px' }}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.length === 0 ? (
                    <p>No tasks available.</p>
                ) : (
                    tasks.map(task => (
                        <li key={task.id}>
                            {task.title} - {task.completed ? 'Done' : 'Pending'}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default App;