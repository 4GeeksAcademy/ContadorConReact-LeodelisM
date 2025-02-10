import React from "react";
import SecondsCounter from "./SecondsCounter";


//create your first component
const Home = (props) => {
	return (
		<div className="m-2">
			<div className="container">
				<SecondsCounter seconds={props.seconds} />
			</div>
		</div>
	);
};

export default Home;