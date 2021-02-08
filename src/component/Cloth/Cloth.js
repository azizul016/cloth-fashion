import React from 'react';
import { Container, Card, Col } from 'react-bootstrap';
import './Cloth.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Cloth(props) {
	const { img, title, description, price } = props.cloth;
	return (
		<Col md={4}>
			<Card>
				<div className="cardImg">
					<Card.Img height="350" variant="top" src={img} />
				</div>
				<Card.Body>
					<Card.Title className="card__title">{title}</Card.Title>
					<Card.Text className="card__body">{description}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<div className="d-flex justify-content-between">
						<h1 className="priceColor">${price}</h1>
						<div style={{ width: '50%' }} className="common__buyNow__btn">
							<ShoppingCartIcon />
							<button className="btn">Buy Now</button>
						</div>
					</div>
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default Cloth;
