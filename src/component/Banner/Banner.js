import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../image/fashion3.png';
import './Banner.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Banner() {
	return (
		<div className="banner">
			<section>
				<Container>
					<Row>
						<Col sm={12} md={6} className="mt-5 pt-2">
							<h2>
								<span className="banner__heading__top">Be the Penguins</span>
								<br />
								<span className="banner__heading__bottom">of Winter</span>
							</h2>
							<p>
								<small className="banner__description">
                  Lorem Ipsum is simply dummy text of the printing and <br />{' '}
                  typesetting industry.
								</small>
							</p>
							<div className="common__buyNow__btn">
								<ShoppingCartIcon />
								<button className="btn">Buy Now</button>
							</div>
						</Col>
						<Col className="bannerImage" sm={12} md={6}>
							<img className="img-fluid" src={bannerImg} alt="" />
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default Banner;
