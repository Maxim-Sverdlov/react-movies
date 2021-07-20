import { useSelector } from "react-redux";
import Preloader from "./preloader";
import Movie from './movie';

const MovieList = () => {
    const {data, isLoading} = useSelector((state) => state.movies);

    const film = data.map((item) => {
        return <Movie key={item.id} item={item} />;
    });

    return (
        <ul className="gallery__list">
            {isLoading ? <Preloader /> : film}
        </ul>
    );
};

export default MovieList;