import { useState } from 'react';
import './App.css';
import { Button } from '@chakra-ui/react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Button>Hello</Button>
			</div>
		</>
	);
}

export default App;
