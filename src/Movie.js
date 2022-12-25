import React from "react";
import PropTyps from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return <h5>{title}</h5>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTyps.string.isRequired,
    summary: PropTyps.string.isRequired,
    poster: PropTyps.string.isRequired
};

    export default Movie;