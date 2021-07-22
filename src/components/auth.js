import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setIsAuth, setLogin, setRole } from '../store/actions';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const users = require('../dummy_data/users.json');

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
        email: Yup.string().required('Email field is Required!').email('Invalid email address'),
        password: Yup.string().required('Password field is Required!').min(6, 'Password must be longer then 6 characters'),
    }),
    onSubmit: (values) => {
      const { email, password } = values;

      users.forEach((user) => {
        if (user.email === email && user.password === password) {
          dispatch(setLogin(user.name));
          dispatch(setRole(user.access));
          dispatch(setIsAuth(true));
          history.push('/');
        }
      });
    },
  });

  return (
    <div>
        <form className="auth__form" onSubmit={handleSubmit}>
            <h2 className="auth__title">Sign in</h2>
            <input 
                type="email" 
                className="auth__email auth__input" 
                placeholder="Email" 
                name="email"
                onChange={handleChange}
                value={values.email}
            />
            <input 
                type="password" 
                className="auth__password auth__input" 
                placeholder="Password" 
                name="password"
                onChange={handleChange}
                value={values.password}
            />
            <section className="auth__btns">
                <button className="auth__btn auth__sign" type="submit">Sign</button>
                <Link to="./registration" className="auth__btn auth__registration">Registration</Link>
            </section>
        </form>
        <section className="msg">
            {touched.email && errors.email ? <h3 className="msg__error">{errors.email}</h3> : null}
            {touched.password && errors.password ? <h3 className="msg__error">{errors.password}</h3> : null}
        </section>
    </div>
  );
};

export default Auth;
