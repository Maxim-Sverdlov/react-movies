import { useDispatch } from 'react-redux';

import { setAddMovie } from '../store/actions';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { customAlphabet } from 'nanoid'

const AddMovie = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const nanoid = customAlphabet('1234567890', 6);

  const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      title: '',
      overview: '',
      poster_path: '',
      popularity: 0,
      release_date: '',
      vote_average: 0,
      vote_count: 0,
      adult: false,
      id: null,
      genre_ids: [28],
    },

    validationSchema: Yup.object({
        title: Yup.string()
          .required('Title field is Required!')
          .min(3, 'Field Title must be longer then 3 symbols'),
        overview: Yup.string()
          .required('Overview field is Required!')
          .max(150, `Field Overview don't must be longer then 150 symbols`),
        poster_path: Yup.string()
          .required('Poster path field is Required!'),
        popularity: Yup.number()
          .required('Popularity field is Required!'),
        release_date: Yup.string()
          .required('Release date field is Required!'),
        vote_average: Yup.number()
          .required('Vote average field is Required!'),
        vote_count: Yup.number()
          .required('Vote count field is Required!'),
        adult: Yup.boolean(),
    }),

    onSubmit: (values) => {
      values.poster_path = null;
      values.id = Number(nanoid());

      dispatch(setAddMovie(values));
      alert(`The movie: ${values.title} was successfully added!`);
      history.push('/');
    },

  });
  return (
    <div className="add">
        <form className="add__form" onSubmit={handleSubmit}>
            <h2 className="add__title">Add film</h2>
            <label htmlFor="title" className="add__title">Title:
                <input 
                    type="text" 
                    id="title" 
                    className="add__input form-field" 
                    placeholder="Title" 
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                />
            </label>
            <label htmlFor="overview" className="add__title">Overview:
                <textarea 
                    id="overview" 
                    className="add__input form-field" 
                    name="overview" 
                    cols="43" 
                    rows="5" 
                    placeholder="Overview"
                    onChange={handleChange}
                    value={values.overview}>
                </textarea>
            </label>
            <label htmlFor="poster-path" className="add__title">Poster path:
                <input 
                    id="poster-path" 
                    type="text" 
                    className="add__input form-field" 
                    placeholder="Posterpath" 
                    name="poster_path"
                    onChange={handleChange}
                    value={values.poster_path}
                />
            </label>
            <label htmlFor="popularity" className="add__title">Popularity:
                <input 
                    id="popularity" 
                    type="number" 
                    className="add__input form-field" 
                    placeholder="Popularity" 
                    name="popularity"
                    onChange={handleChange}
                    value={values.popularity}
                />
            </label>
            <label htmlFor="release" className="add__title">Release:
                <input 
                    id="release" 
                    type="date"
                    className="add__input form-field" 
                    placeholder="Release date" 
                    name="release_date"
                    onChange={handleChange}
                    value={values.release_date}
                />
            </label>

            <label htmlFor="average" className="add__title">Average:
                <input 
                    id="average" 
                    type="number" 
                    className="add__average add__input form-field" 
                    placeholder="Vote average" 
                    name="vote_average"
                    onChange={handleChange}
                    value={values.vote_average}
                />
            </label>
            <label htmlFor="count" className="add__title">Count average:
                <input 
                    id="count" 
                    type="number" 
                    className="add__count add__input form-field" 
                    placeholder="Count average" 
                    name="vote_count"
                    onChange={handleChange}
                    value={values.vote_count}
                />
            </label>
            <label htmlFor="adult" className="add__title">
                <input 
                    id="adult" 
                    type="checkbox"
                    name="adult"
                    onChange={handleChange}
                    value={values.adult}
                />Adult
            </label>
            <div className="add__btns">
                <button className="add__btn add__add" type="sybmit">Add</button>
                <button className="add__btn add__clear" type="button" onClick={resetForm}>Clear</button>
            </div>
        </form>
        <section className="msg">
            {touched.title && errors.title ? <h3 className="msg__error">{errors.title}</h3> : null}
            {touched.overview && errors.overview ? <h3 className="msg__error">{errors.overview}</h3> : null}
            {touched.poster_path && errors.poster_path ? <h3 className="msg__error">{errors.poster_path}</h3> : null}
            {touched.popularity && errors.popularity ? <h3 className="msg__error">{errors.popularity}</h3> : null}
            {touched.release_date && errors.release_date ? <h3 className="msg__error">{errors.release_date}</h3> : null}
            {touched.poster_path && errors.poster_path ? <h3 className="msg__error">{errors.poster_path}</h3> : null}
            {touched.popularity && errors.popularity ? <h3 className="msg__error">{errors.popularity}</h3> : null}
            {touched.release_date && errors.release_date ? <h3 className="msg__error">{errors.release_date}</h3> : null}
            {touched.vote_average && errors.vote_average ? <h3 className="msg__error">{errors.vote_average}</h3> : null}
            {touched.vote_count && errors.vote_count ? <h3 className="msg__error">{errors.vote_count}</h3> : null}
            {touched.adult && errors.adult ? <h3 className="msg__error">{errors.adult}</h3> : null}
        </section>
    </div>
  );
};
export default AddMovie;