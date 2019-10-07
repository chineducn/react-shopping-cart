import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import productContext from './contexts/productContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import cartContext from './contexts/cartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = (item) => {
		//debugger
		setCart(cart.filter(pick => pick.id !== item));
	};

	return (
		<productContext.Provider value={{ products, addItem }} >
			<div className="App">
				<cartContext.Provider value={{ cart, removeItem }}>
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</cartContext.Provider>
			</div>
		</productContext.Provider>
	);
}

export default App;
