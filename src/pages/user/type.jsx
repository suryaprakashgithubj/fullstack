// import React from 'react';
import Typewriter from "typewriter-effect";
import '/src/assets/css/type.css';

function Type() {
	return (
		<div className="ty">
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Creating Connections, Inspiring Collaborations – Every Detail, Every Moment, Perfected!!")
						.pauseFor(1000)
						.deleteAll()
						.typeString("Elevate Your Events with Our Expertise!!")
						.start();
				}}
			/>
		</div>
	);
}

export default Type;
