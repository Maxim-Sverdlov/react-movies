import '../scss/app.scss';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { loadMovies } from '../store/actions';

import Sorter from './sorter';
import MoviesList from './moviesList';
import MovieDetail from './movieDetail';
import Pagination from './pagination';
import Auth from './auth';
import Registration from './registration';
import PageNotFound from './pageNotFound';

import AddMovie from './addMovie';
import PrivateRoute from './privateRoute';

import { setIsAuth, setLogin, setRole } from '../store/actions';

const App = () => {
    const dispatch = useDispatch();

    const { currentPage } = useSelector((state) => state.page);
    const { order } = useSelector((state) => state.sort);

    const { isAuth, login } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(loadMovies(currentPage, order));
    }, [currentPage, order, dispatch]);

    const clickHandler = () => {
      dispatch(setIsAuth(false));
      dispatch(setLogin(''));
      dispatch(setRole(''));
    };

  return (
    <div className="App">
      <h1 className="visually-hidden">App Film gallery</h1>
      <header className="header">
        <div className="container">
          <div className="header__navigation">
            <Link to="/" className="header__home">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/>
              </svg>
            </Link>
            <div className="header__auth">
              {isAuth ? <span className="header__user">{login}</span> : null}
              {isAuth ? <button className="header__sign" onClick={clickHandler}>LogOut</button> : <Link to="/auth" className="header__sign">Sign In/Sign Up</Link>}
            </div>
          </div>
        </div>
      </header>
      <main className="gallery">
          <div className="container">
          <Switch>
            <Route path="/" exact>
              <Sorter />
              <MoviesList />
              <Pagination />
            </Route>
            <Route path="/movie-detail/:id" exact>
              <MovieDetail />
            </Route>
            <Route path="/auth" exact>
              <Auth />
            </Route>
            <Route path="/registration" exact>
              <Registration />
            </Route>
            <PrivateRoute component={AddMovie} path="/add-movie" exact />
            <PageNotFound />
          </Switch>
          </div>
      </main>
    </div>
  );
}

export default App;
