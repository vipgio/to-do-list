import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const AddNewTask = () => {
	const [description, setDescription] = useState("");
	const { addTask } = useContext(TaskContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(description);
		setDescription("");
	};
	return (
		<div className='create'>
			<form onSubmit={handleSubmit} className='submit-form'>
				<input
					type='text'
					required
					placeholder='Enter a task...'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button>Add Task</button>
			</form>
		</div>
	);
};

export default AddNewTask;
