import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';

function App() {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Home/>}/>
			</Route>
		</Routes>
	);
}

export default App;
