import React, { useContext, useState, useEffect } from "react";
import { FaRegTrashAlt, FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TaskContext } from "../contexts/TaskContext";

const Tasks = () => {
	const { tasks, deleteTask, completeTask, showCompleted } = useContext(TaskContext);
	const [remainingTasksCount, setRemainingTasksCount] = useState(0);

	useEffect(() => {
		const remainingTasks = tasks.filter((task) => !task.isDone);
		setRemainingTasksCount(remainingTasks.length);
	}, [tasks]);

	return (remainingTasksCount && !showCompleted) ||
		(tasks.length - remainingTasksCount && showCompleted) ? (
		<div className='tasks'>
			<div className='top-shadow'></div>
			<div className='shadow-container'>
				{tasks
					.filter((task) => task.isDone === showCompleted)
					.map((task) => (
						<div key={task.id} className='task-row'>
							{showCompleted ? (
								<AiOutlineCloseCircle
									className='x-button'
									onClick={() => completeTask(task.id)}
								/>
							) : (
								<FaRegCheckCircle
									className='checkmark'
									onClick={() => completeTask(task.id)}
								/>
							)}
							<p className='each-task'>{task.description}</p>
							<FaRegTrashAlt className='trash' onClick={() => deleteTask(task.id)} />
						</div>
					))}
			</div>
			<div className='bottom-shadow'></div>
		</div>
	) : !showCompleted ? (
		<div className='empty'>No more tasks left</div>
	) : (
		<div className='empty'>Nooo task is done</div>
	);
};

export default Tasks;
