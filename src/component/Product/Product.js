import React from 'react';
import Footer from '../Footer/Footer';
import MensCloth from '../MensCloth/MenCloth';
import WomenJeckets from '../WomenJeckets/WomenJeckets';

function Product() {
	return (
		<div>
			<WomenJeckets />
			<MensCloth />
			<Footer />
			<p className="text-center">
        Copyright By <span style={{ color: '#FABE4C' }}>Azizul Haque</span> in
        2021
			</p>
		</div>
	);
}

export default Product;
