import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import plug from '../images/content/clapper.svg';

const Movie = ({ item }) => {
    const dispatch = useDispatch();

    const {title, poster_path, vote_average, release_date} = item;
    //console.log(item);
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
                    <span class="gallery__year">Release date: <br />{release_date}</span>
                    <span class="gallery__rating">Rating: {vote_average}</span>
                </section>
            </Link>
        </li>
    );
  };
  
  export default Movie;