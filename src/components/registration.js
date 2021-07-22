import { useHistory } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import users from '../dummy_data/users.json';

const Registration = () => {
    const history = useHistory();

  const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      password: '',
      confirmPassword: '',
      email: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name field is Required!')
        .min(6, 'Field Name must be longer then 6 symbols'),
      surname: Yup.string()
        .required('Surname field is Required!')
        .min(6, 'Field Surname must be longer then 6 symbols'),
      password: Yup.string()
        .required('Password field is Required!')
        .min(6, 'Field Password must be longer then 6 symbols'),
      confirmPassword: Yup.string()
        .required('Confirm Password field is Required!')
        .min(6, 'Field Confirm Password must be longer then 6 symbols')
        .oneOf([Yup.ref('password'), null], 'The fields Password and Confirm Passwords must be equal'),
      email: Yup.string().required('Email field is Required!').email('Invalid email address'),
    }),

    onSubmit: (values) => {
        const { email} = values;

        const user = users.find((user) => user.email === email);

        if (user !== undefined) {
            alert(`The user: ${user.name} with this email: ${user.email} already exists in the system !!!`);
        } else {
            alert(`New user successfully registred !!!`);
            history.push('/');
        };
    },
  });

  return (
    <div className="auth">
        <form className="auth__form" onSubmit={handleSubmit}>
            <h2 className="auth__title">Registration</h2>
            <input 
                type="text" 
                className="auth__name auth__input" 
                placeholder="Name, insert minimal 6 symbols" 
                name="name"
                onChange={handleChange}
                value={values.name}
            />
            <input 
                type="text" 
                className="auth__surname auth__input" 
                placeholder="Surname, insert minimal 6 symbols" 
                name="surname"
                onChange={handleChange}
                value={values.surname}
            />
            <input 
                type="password" 
                className="auth__password auth__input" 
                placeholder="Password, insert minimal 6 symbols" 
                name="password"
                onChange={handleChange}
                value={values.password}
            />
            <input 
                type="password" 
                className="auth__confirm-password auth__input" 
                placeholder="Confirm Password, insert minimal 6 symbols" 
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
            />
            <input 
                type="email" 
                className="auth__email auth__input" 
                placeholder="Email, insert valid email" 
                name="email"
                onChange={handleChange}
                value={values.email}
            />
            <section className="auth__btns">
                <button className="auth__btn auth__sign" type="submit">Sign up</button>
                <button className="auth__btn auth__clear" onClick={resetForm}>Clear</button>
            </section>
        </form>
            <section className="msg">
                {touched.name && errors.name ? <h3 className="msg__error">{errors.name}</h3> : null}
                {touched.surname && errors.surname ? <h3 className="msg__error">{errors.surname}</h3> : null}
                {touched.password && errors.password ? <h3 className="msg__error">{errors.password}</h3> : null}
                {touched.confirmPassword && errors.confirmPassword ? <h3 className="msg__error">{errors.confirmPassword}</h3> : null}
                {touched.email && errors.email ? <h3 className="msg__error">{errors.email}</h3> : null}
            </section>
    </div>
  );
};

export default Registration;