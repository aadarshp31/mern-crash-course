import { useState } from 'react';
import './App.css';
import { Box, Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import CreatePage from './page/CreatePage';
import Navbar from './component/Navbar';
import { ToastContainer } from 'react-toastify';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Box minH={'100vk'}>
				{<Navbar></Navbar>}

				<Routes>
					<Route path='/' element={<HomePage></HomePage>}></Route>
					<Route path='/create' element={<CreatePage></CreatePage>}></Route>
				</Routes>
				<ToastContainer />
			</Box>
		</>
	);
}

export default App;
