import React, { useReducer, useEffect, useState, useRef } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import Timer from './components/Timer';
import { TaskStatsProvider } from './context/TaskStatsContext';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';


import 'bootstrap/dist/css/bootstrap.min.css';

// Reducer function to manage task logic
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_TASKS':
            return action.payload;
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        default:
            return state;
    }
};

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [taskText, setTaskText] = useState('');
    const isInitialMount = useRef(true);

    // Load tasks from localStorage once on mount
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(storedTasks) });
        }
    }, []);

    // Save tasks to localStorage when updated
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    // Add a task
    const handleAddTask = () => {
        if (taskText.trim() === '') return;
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };
        dispatch({ type: 'ADD_TASK', payload: newTask });
        setTaskText('');
    };

    // Toggle completion of task
    const toggleTaskCompletion = (id) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    return (
        <ThemeProvider>
            <div className="container py-5">
                <div className="card shadow p-4">
                    <h1 className="text-center mb-4">Smart Task Manager</h1>

                    {/* Theme toggle */}
                    <ThemeToggle />

                    <TaskStatsProvider tasks={tasks}>
                        <TaskInput
                            taskText={taskText}
                            setTaskText={setTaskText}
                            handleAddTask={handleAddTask}
                        />

                        <TaskList
                            tasks={tasks}
                            toggleTaskCompletion={toggleTaskCompletion}
                        />

                        <TaskStats />
                        <Timer />
                    </TaskStatsProvider>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
