import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, coverImg, rating, genres, summary }) {
  return (
    <div className={styles.movie}>
      <img
        src={coverImg}
        alt={title}
        title={title}
        className={styles.movie__img}
      />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h4>rating : {rating}</h4>
        <p>{summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
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
