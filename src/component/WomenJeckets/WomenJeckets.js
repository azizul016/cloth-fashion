import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cloth from '../Cloth/Cloth';
import { WomenJacket } from '../fakeData/clothFakeData';

function WomenJeckets() {
	const [womenJacket, setWomenJacket] = useState(WomenJacket);

	return (
		<>
			<section>
				<Container>
					<h3 className="common__jacket__heading pb-3">WoMan Jacket</h3>
					<Row>
						{womenJacket.map((cloth) => (
							<Cloth cloth={cloth} key={Math.random()} />
						))}
					</Row>
				</Container>
			</section>
		</>
	);
}

export default WomenJeckets;
