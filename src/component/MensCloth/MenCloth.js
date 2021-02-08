import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cloth from '../Cloth/Cloth';
import { MenCloth } from '../fakeData/clothFakeData';

function MensCloth() {
	const [menCloth, setMenCloth] = useState(MenCloth);
	console.log(menCloth);
	return (
		<>
			<section>
				<Container>
					<h3 className="common__jacket__heading py-3">Man Jacket</h3>
					<Row>
						{menCloth.map((cloth) => (
							<Cloth cloth={cloth} key={Math.random()} />
						))}
					</Row>
				</Container>
			</section>
		</>
	);
}

export default MensCloth;
