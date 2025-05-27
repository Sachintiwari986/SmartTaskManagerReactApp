
import React, { useRef, useEffect } from 'react';

function TaskInput({ taskText, setTaskText, handleAddTask }) {
    const inputRef = useRef(null);

    // Focus input on first mount
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="input-group mb-4">
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask} className="btn btn-primary">
                Add Task
            </button>
        </div>
    );
}

export default TaskInput;
