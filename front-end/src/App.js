import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';

function App() {
	return (
		<Router>
			<Header />
			<Route path='/login' component={LoginScreen} />
			<Route path='/' component={HomeScreen} exact />
		</Router>
	);
}

export default App;
