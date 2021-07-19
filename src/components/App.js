import '../scss/app.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadMovies } from '../store/actions';

import Sorter from './sorter';
import MoviesList from './moviesList';

const App = () => {
    const dispatch = useDispatch();

    const { currentPage } = useSelector((state) => state.page);
    const { order } = useSelector((state) => state.sort);

    useEffect(() => {
        dispatch(loadMovies(currentPage, order));
    }, [currentPage, order, dispatch]);

  return (
    <div className="App">
      <h1 class="visually-hidden">App Film gallery</h1>
      <header class="header">
          <h1>121212</h1>
      </header>
      <main class="gallery">
          <div class="container">
              <Sorter />
              <MoviesList />
              <section class="pagination"></section>
          </div>
      </main>
    </div>
  );
}

export default App;
