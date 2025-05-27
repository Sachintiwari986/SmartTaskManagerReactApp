import React from 'react';

function TaskList({ tasks, toggleTaskCompletion }) {
    return (
        <ul className="list-group">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    onClick={() => toggleTaskCompletion(task.id)}
                    className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-secondary text-decoration-line-through' : ''
                        }`}
                    style={{ cursor: 'pointer' }}
                >
                    {task.text}
                    <span className="badge bg-info text-dark">
                        {task.completed ? 'Done' : 'Pending'}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
