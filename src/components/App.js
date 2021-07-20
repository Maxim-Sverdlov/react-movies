import '../scss/app.scss';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadMovies } from '../store/actions';

import Sorter from './sorter';
import MoviesList from './moviesList';
import MovieDetail from './movieDetail';

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
          <Switch>
            <Route path="/" exact>
              <Sorter />
              <MoviesList />
              <section class="pagination"></section>
            </Route>
            <Route path="/movie-detail/:id" exact>
              <MovieDetail />
            </Route>
          </Switch>
          </div>
      </main>
    </div>
  );
}

export default App;
