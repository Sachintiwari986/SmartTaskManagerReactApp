import React, { useRef, useEffect } from 'react';

function TaskInput({ taskText, setTaskText, handleAddTask }) {
    const inputRef = useRef(null);

    // Focus input on first mount
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="mb-4">
            <h2 className="fw-bold text-center mb-3 py-2 rounded bg-primary text-light">
                Add a New Task
            </h2>
            <div className="input-group">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter your task..."
                    value={taskText}
                    onChange={e => setTaskText(e.target.value)}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
}

export default TaskInput;
