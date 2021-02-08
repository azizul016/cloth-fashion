import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FootersPart } from '../fakeData/clothFakeData';
import SingleFooter from './SingleFooter';
import footerimg from '../image/a.png';

function Footer() {
	const [footer, setFooter] = useState(FootersPart);
	console.log(footer);
	return (
		<Container className="my-4">
			<Row>
				<Col md={5} className="order-12 order-sm-1">
					{footer.map((sFooter) => (
						<SingleFooter key={Math.random()} footer={sFooter} />
					))}
				</Col>
				<Col md={7} className="order-1 order-sm-12 py-2">
					<img
						style={{ padding: '25px' }}
						src={footerimg}
						className="img-fluid"
						alt=""
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
