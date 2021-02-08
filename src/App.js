import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MenuBar from './component/MenuBar/MenuBar';
import Home from './component/Home/Home';
import Product from './component/Product/Product';
import Footer from './component/Footer/Footer';

function App() {
	return (
		<Router>
			<MenuBar />
			<Switch>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/product">
					<Product />
				</Route>
				<Route path="/aboutUs">
					<Footer />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="*">
					<h2>Not Found</h2>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
