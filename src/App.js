import Navbar from "./components/Navbar";
import AddNewTask from "./components/AddNewTask";
import Tasks from "./components/Tasks";
import TaskContextProvider from "./contexts/TaskContext";

function App() {
	return (
		<div className='App'>
			<div className='content'>
				<div className='box'>
					<TaskContextProvider>
						<Navbar />
						<AddNewTask />
						<Tasks />
					</TaskContextProvider>
				</div>
			</div>
		</div>
	);
}

export default App;
