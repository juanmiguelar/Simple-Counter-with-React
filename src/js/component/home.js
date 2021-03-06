import React, { Fragment } from "react";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	const getClock = () => {
		let resultado = "";
		const espacios = 5;
		const secondsString = props.seconds + "";
		if (secondsString.length < 5) {
			// si es menor a 5 debo agregarle ceros a la izquierda
			while (resultado.length + secondsString.length < 5) {
				resultado = resultado + "0";
			}
			resultado = resultado + secondsString;
		}

		return resultado;
	};

	return (
		<Fragment>
			<div className="text-center mt-5 bg-dark text-light">
				<h1 className="display-1">
					<i className="fas fa-clock"></i> {getClock()}
				</h1>
			</div>
		</Fragment>
	);
};

Home.propTypes = {
	seconds: PropTypes.number
};

export default Home;
