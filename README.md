📄 README: React Hooks Usage Summary
This project demonstrates a Smart Task Manager Dashboard built with React, showcasing the use of core and advanced React Hooks.

 React Hook Usage Overview
1. useState

Used to manage the task input field (taskText)

Used to track the global timer (seconds)

2. useEffect

Loads tasks from localStorage when the app mounts

Saves tasks to localStorage whenever the task list changes

Also used to apply and persist theme selection (light/dark mode)

3. useReducer

Manages the entire task list: adding, toggling, and initializing tasks

Provides a scalable way to centralize complex task-related logic

4. useRef

Automatically focuses the input field when the component mounts

Tracks the timer interval ID without triggering re-renders

5. useContext

Provides global access to task statistics (total, completed, pending) via TaskStatsContext

Manages theme toggling (light/dark) using ThemeContext

6. useMemo

Optimizes the task statistics calculation to avoid recalculating on every render

7. useCallback

Ensures stable function references for event handlers like toggleTheme and handleAddTask

8. useLayoutEffect

Reserved for future layout adjustments like scrolling to the latest task (not currently in use but scaffolded)

8. Custom Hooks

useLocalStorage (can be added to abstract localStorage logic)

usePomodoroTimer (planned for future timer-based focus modes)