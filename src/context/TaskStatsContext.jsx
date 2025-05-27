import React, { createContext, useContext, useMemo } from 'react';

const TaskStatsContext = createContext();

export const TaskStatsProvider = ({ tasks, children }) => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;

    const value = useMemo(() => ({ total, completed, pending }), [total, completed, pending]);

    return (
        <TaskStatsContext.Provider value={value}>
            {children}
        </TaskStatsContext.Provider>
    );
};

export const useTaskStats = () => useContext(TaskStatsContext);
