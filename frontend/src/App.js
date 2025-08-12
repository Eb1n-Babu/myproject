import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/todos/')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    const addTodo = () => {
        axios.post('http://localhost:8000/api/todos/', { title: newTodo, completed: false })
            .then(response => setTodos([...todos, response.data]))
            .catch(error => console.error(error));
        setNewTodo('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title} - {todo.completed ? 'Done' : 'Pending'}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;