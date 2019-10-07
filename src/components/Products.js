import React, { useContext } from 'react';


// Components
import Product from './Product';
import productContext from '../contexts/productContext';

const Products = () => {
	const { products, addItem } = useContext(productContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
