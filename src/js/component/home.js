import React, { Fragment } from "react";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	const getClock = () => {
		let resultado = "";
		const espacios = 5;
		const secondsString = props.seconds + "";
		if (secondsString.length < espacios) {
			// si es menor a 5 debo agregarle ceros a la izquierda
			while (resultado.length + secondsString.length < espacios) {
				resultado = resultado + "0";
			}
			resultado = resultado + secondsString;
		}

		return resultado;
	};

	return (
		<div className="text-center mt-5 bg-dark text-light">
			<h1 className="display-1">
				<i className="fas fa-clock"></i> {props.seconds}
			</h1>
		</div>
	);
};

Home.propTypes = {
	seconds: PropTypes.number
};

export default Home;
