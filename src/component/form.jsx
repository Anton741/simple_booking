import {useSelector} from 'react-redux'
const Form = ({handleSubmit, handleChange}) => {

  const alert = useSelector((state) => state.app.alert)
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__body">
        <div className="login__input-login"></div>
        <label htmlFor="#email" className={alert.email.length > 0 ? 'login__lable  alert' : 'login__lable '}>
          Логин
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={alert.email.length > 0 ? 'login__input  login__input-alert' : 'login__input '}
          placeholder="Username"
          onChange={handleChange}
        />
        {alert.email.length > 0 && (
          <div class="alert alert-danger" role="alert">
            {alert.email.map((element) => {
              return <p>{element}</p>;
            })}
          </div>
        )}
        <label htmlFor="#password" className={alert.password.length > 0 ? 'login__lable  alert' : 'login__lable '}>
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={alert.password.length > 0 ? 'login__input  login__input-alert' : 'login__input '}
          placeholder="Password"
          onChange={handleChange}
        />
        {alert.password.length > 0 && (
          <div class="alert alert-danger" role="alert">
            {alert.password.map((element,index) => {
              return <p key= {index} >{element}</p>;
            })}
          </div>
        )}
        <input type="submit" className="login__btn" value="Войти" />
      </div>
    </form>
  );
}
export default Form;