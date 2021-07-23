import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Preloader from './preloader';
import plug from '../images/content/clapper.svg';

import { setDeleteMovie } from '../store/actions';
import { loadGenresList } from '../store/actions';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadGenresList());
  }, [dispatch]);

  const { data, isLoading } = useSelector((state) => state.movies);
  const { role } = useSelector((state) => state.auth);

  const film = data.find((item) => item.id === Number(id));

  const deleteHandler = () => {
    dispatch(setDeleteMovie(film));
    history.push('/');
  };
  
  const {poster_path, title, popularity, release_date, vote_average, vote_count, overview} = film;

  const { genres } = useSelector((state) => state.genresList);

  let movieGenres = genres.filter((item) => film['genre_ids'].indexOf(item.id) !== -1);
  movieGenres = movieGenres.map(item => item.name);

  let poster = '';
  
  if (poster_path !== null) {
    poster = `https://image.tmdb.org/t/p/w300${poster_path}`;
  } else {
    poster = plug;
  }

  const detail = (
    <section className="film__section">
        <div className="film__img">
          <img className="film__poster" src={poster} alt={`cover for ${title}`} />
          {
            role === 'admin' ? 
              <button className="film__del" onClick={deleteHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/>
                </svg>
              </button> :
              null
          }
        </div>
        <div className="film__detail">
          <h3 className="film__title">Title: {title}</h3>
          <h4 className="film__genres">Genres: {movieGenres.join(', ')}</h4>
          <p className="film__popularity">Film popularity: {popularity}</p>
          <p className="film__date">Release date: {release_date}</p>
          <p className="film__average">Average: {vote_average}</p>
          <p className="film__count">Average count: {vote_count}</p>
          <p className="film__overview">Overview: {overview}</p>
        </div>
    </section>
  );

  return isLoading ? <Preloader /> : detail;
};

export default MovieDetail;
