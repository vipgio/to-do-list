import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { v1 as uuid } from "uuid";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
	const loadingValue = () => {
		const defTasks = localStorage.getItem("tasks");
		return defTasks ? JSON.parse(defTasks) : [];
	};
	const [tasks, setTasks] = useState(loadingValue);
	const [showCompleted, setShowCompleted] = useState(false);
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);
	const addTask = (description) => {
		setTasks((prev) => [{ description, isDone: false, id: uuid() }, ...prev]);
	};
	const deleteTask = (id) => {
		setTasks((tasks) => tasks.filter((task) => task.id !== id));
	};
	const completeTask = (completedTaskId) => {
		setTasks((tasks) =>
			tasks.map((task) => {
				return task.id === completedTaskId
					? { ...task, isDone: !task.isDone }
					: { ...task };
			})
		);
	};
	return (
		<TaskContext.Provider
			value={{
				tasks,
				addTask,
				deleteTask,
				completeTask,
				showCompleted,
				setShowCompleted,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskContextProvider;
