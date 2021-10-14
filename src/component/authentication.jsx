import {useDispatch, connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { addBookmark } from '../redux/action';
import {authenticationValid, showAlert } from '../redux/action'
import {validator} from '../utils/validator'
import Form from './form'


const Authentication = ({ data, setAuth, showAlert, alert }) => {
  const history = useHistory();
  const dispatch = useDispatch()
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

  const handleChange = ({target}) => {
    setAuth({ [target.name]: target.value });
    showAlert(validator(target.value,target.name, validatorConfig), target.name);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (alert.password.length === 0 && alert.email.length === 0 ){
      let users = [];
      let loginedUser
      if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
      } else {
        localStorage.setItem(
          'users',
          JSON.stringify([
            {
              password: data.password,
              email: data.email,
              bookmarks: [],
            },
          ])
        );
        users = JSON.parse(localStorage.getItem('users'));
      }
      users.some((user) => {
        if (user.email === data.email && user.password === data.password) {
          history.push('/main');
          loginedUser = user;
          return user;
        } else if (user.email === data.email && user.password !== data.password){
          loginedUser = 'Wrong credentinal';
          return null;
        }else{
          return null
        }
      });
      if (loginedUser && loginedUser !== 'Wrong credentinal') {
        loginedUser.bookmarks.map((bookmark) =>
          dispatch(addBookmark(bookmark))
        );
      } else if (loginedUser !== 'Wrong credentinal') {
        users.push({
          password: data.password,
          email: data.email,
          bookmarks: [],
        });
        localStorage.setItem('users', JSON.stringify(users));
        history.push('/main');
      }
    }
  }
  return (
    <div className="authentication">
      <h1 className="authentication__title">Simple Hotel Check</h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.AuthValidation,
    bookmark: state.app.bookmark,
    alert: state.app.alert
  }
}

const mapDispatchToProps = {
  setAuth: authenticationValid,
  showAlert: showAlert,
};

export default connect(mapStateToProps,mapDispatchToProps)(Authentication);