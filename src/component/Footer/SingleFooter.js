import React from 'react';
import { Col } from 'react-bootstrap';
import './Footer.css';

function SingleFooter(props) {
	const { img, title, description } = props.footer;
	return (
		<Col>
			<div className="d-flex justify-content-center align-items-center mb-3 footerCol">
				<div>
					<img height="100" src={img} alt="" />
				</div>
				<div className="ml-3">
					<h6>{title}</h6>
					<p>
						<small>{description}</small>
					</p>
				</div>
			</div>
		</Col>
	);
}

export default SingleFooter;
