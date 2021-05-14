import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeScreen from './Screen/HomeScreen';

function App() {
	return (
		<Router>
			<Header />
			<Route path='/' component={HomeScreen} exact />
			
		</Router>
	);
}

export default App;
