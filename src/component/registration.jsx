import { connect } from 'react-redux';
import { authenticationValid, showAlert } from '../redux/action';
import { validator } from '../utils/validator';
import Form from './form';

const Registration = ({ data, setAuth, showAlert, alert }) => {
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Все поля обязательны для заполнения',
      },
      emailValid: {
        message: 'Введите логин форматом example@mail.ru',
      },
    },
    password: {
      isRequired: {
        message: 'Все поля обязательны для заполнения',
      },
      minLength: {
        message: 'Минимальная длина пароля 8 символов',
      },
      hasRussianLetters: {
        message: 'Введите только латинские буквы ',
      },
    },
  };

  const handleChange = ({ target }) => {
    setAuth({ [target.name]: target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    showAlert(validator(data, validatorConfig));
    let users = []
    localStorage.getItem('users') ? users = JSON.parse(localStorage.getItem('users')): localStorage.setItem('users', [])
    users.push({
      password: data.password,
      email: data.email,
      bookmarks: []
    });
    localStorage.setItem('users', JSON.stringify(users));
  };
  return (
    <>
      {alert && (
        <div class="alert alert-danger" role="alert">
          {alert.map((element) => {
            return <p>{element}</p>;
          })}
        </div>
      )}
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.AuthValidation,
    alert: state.app.alert,
  };
};

const mapDispatchToProps = {
  setAuth: authenticationValid,
  showAlert: showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
