import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, rating, genres, summary }) {
  return (
    <div key={id}>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={title} title={title}></img>
      <h4>rating : {rating}</h4>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <h3>{summary}</h3>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
