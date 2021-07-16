import React from 'react';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <h1 class="visually-hidden">App Film gallery</h1>
      <header class="header">
          <div class="container">
              <div class="header__navigation">
                  <a href="/" class="header__home">
                      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/>
                      </svg>
                  </a>
                  <div class="header__auth">
                      <span class="header__user not-display">Admin</span>
                      <a href="./auth.html" class="header__sign not-display">Sign In/Sign Up</a>
                  </div>
              </div>
          </div>
      </header>
      <main class="gallery">
          <div class="container">
              <form action="" class="form">
                  <label class="gallery__label" for="filter">Sorted by </label>
                  <select class="gallery__filter" name="filter" id="filter">
                      <option value="popularity.desc">Popularity DESC</option>
                      <option value="release_date.asc">Release date ASC</option>
                      <option value="release_date.desc">Release date DESC</option>
                      <option value="vote_count.asc">Vote rating ASC</option>
                      <option value="vote_average.desc">Vote rating DESC</option>
                  </select>
              </form>
              <ul class="gallery__list"></ul>
              <section class="pagination"></section>
          </div>
      </main>
    </div>
  );
}

export default App;
