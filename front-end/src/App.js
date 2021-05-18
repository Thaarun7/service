import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ProfileScreen from './Screen/ProfileScreen';
import DetailScreen from './Screen/DetailScreen';

function App() {
	return (
		<Router>
			<Header />
			<Route path='/details' component={DetailScreen} />
			<Route path='/login' component={LoginScreen} />
			<Route path='/profile' component={ProfileScreen} />
			<Route path='/register' component={RegisterScreen} />
			<Route path='/' component={HomeScreen} exact />
		</Router>
	);
}

export default App;
