import { useSelector } from "react-redux";
import Plug from "./plug";
import Movie from './movie';

const MovieList = () => {
    const {data, isLoading} = useSelector((state) => state.movies);

    const Film = data.map((item) => {
        return <Movie key={item.id} item={item} />;
    });

    return (
        <ul className="gallery__list">
            {isLoading ? <Plug /> : Film}
        </ul>
    );
};

export default MovieList;