import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDeleteMovie } from '../store/actions';
import plug from '../images/content/clapper.svg';

const Movie = ({ item }) => {
    const dispatch = useDispatch();
    const { role } = useSelector((state) => state.auth);

    const deleteHandler = () => {
      dispatch(setDeleteMovie(item));
    }

    const {title, poster_path, vote_average, release_date} = item;
    
    let poster = '';
  
    if (poster_path !== null) {
      poster = `https://image.tmdb.org/t/p/w300${poster_path}`;
    } else {
      poster = plug;
    }
  
    return (
        <li className="gallery__item">
            <Link to={`/movie-detail/${item.id}`} className="gallery__link">
                <img className="gallery__img" src={poster} alt={title} />
                <h3 className="gallery__title">{title}</h3>
                <section className="gallery__info">
                    <span className="gallery__year">Release date: <br />{release_date}</span>
                    <span className="gallery__rating">Rating: {vote_average}</span>
                </section>
            </Link>
            {
              role === 'admin' ? 
                <button className="gallery__del" onClick={deleteHandler}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/>
                  </svg>
                </button> 
                : 
                null
            }
        </li>
    );
  };
  
  export default Movie;