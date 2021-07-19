import { useDispatch, useSelector } from 'react-redux';
import { setSort, setPage } from '../store/actions';

const Sorter = () => {
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.sort);

  const handlerChange = (e) => {
    dispatch(setPage(1));
	dispatch(setSort(e.target.value));
  };

  return (

    <section className="form">
        <label className="gallery__label" for="filter">Sorted by </label>
        <select className="gallery__filter" onChange={handlerChange} value={order}>
            <option value="popularity.desc">Popularity DESC</option>
            <option value="release_date.asc">Release date ASC</option>
            <option value="release_date.desc">Release date DESC</option>
            <option value="vote_average.asc">Vote rating ASC</option>
            <option value="vote_average.desc">Vote rating DESC</option>
        </select>
    </section>
  );
};

export default Sorter;
