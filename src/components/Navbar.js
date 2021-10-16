import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext";

const myDate = () => {
	const today = new Date();
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const dayName = days[today.getDay()];
	const month = today.toLocaleString("default", { month: "long" });
	const day = today.getDate();
	return { dayName, month, day };
};

const Navbar = () => {
	const { tasks, showCompleted, setShowCompleted } = useContext(TaskContext);
	const { dayName, month, day } = myDate();
	const [remainingTasksCount, setRemainingTasksCount] = useState(0);
	useEffect(() => {
		const remainingTasks = tasks.filter((task) => !task.isDone);
		setRemainingTasksCount(remainingTasks.length);
	}, [tasks]);
	return (
		<div className='navbar'>
			<div className='date'>
				<span style={{ fontWeight: 500 }}>
					{dayName}, {month} {day}
				</span>
				<span className='tasks-left'>
					{remainingTasksCount} {remainingTasksCount !== 1 ? "tasks" : "task"} left
				</span>
			</div>
			<div className='task-categories'>
				<button
					onClick={() => setShowCompleted(false)}
					style={showCompleted ? { color: "gray" } : { color: "white" }}
				>
					Incomplete Tasks
				</button>
				<button
					onClick={() => setShowCompleted(true)}
					style={showCompleted ? { color: "white" } : { color: "gray" }}
				>
					Completed Tasks
				</button>
			</div>
		</div>
	);
};

export default Navbar;
