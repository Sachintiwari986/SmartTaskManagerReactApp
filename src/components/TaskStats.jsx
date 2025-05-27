import React from 'react';
import { useTaskStats } from '../context/TaskStatsContext';

function TaskStats() {
    const { total, completed, pending } = useTaskStats();

    return (
        <div className="text-center mt-4">
            <h5 className="mb-3">📊 Task Summary</h5>
            <div className="d-flex justify-content-around">
                <div className="badge bg-primary">Total: {total}</div>
                <div className="badge bg-success">Completed: {completed}</div>
                <div className="badge bg-warning text-dark">In Progress: {pending}</div>
            </div>
        </div>
    );
}

export default TaskStats;
