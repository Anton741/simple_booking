import {  useDispatch, useSelector } from 'react-redux';
import { searchHotel, loadCity } from '../redux/action';

const SearchForm = () => {
  const dispatch = useDispatch();
  const parametrs = useSelector((state) => state.searchHotel.searchParametrs);
  const handleChange = ({ target }) => {
    dispatch(searchHotel({ [target.name]: target.value }));
    searchHotel({ [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadCity(parametrs.city, parametrs.date, 2));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__body">
        <div className="login__input-login"></div>
        <label htmlFor="#city" className = 'login__lable'>Локация</label>
        <input
          type="text"
          name="city"
          id="city"
          className="login__input "
          placeholder={parametrs.city}
          onChange={handleChange}
        />
        <label htmlFor="#date" className = 'login__lable'>Дата заселения</label>
        <input
          type="date"
          name="date"
          id="id"
          className="login__input"
          value={parametrs.date}
          onChange={handleChange}
        />
        <label htmlFor="#days" className = 'login__lable'>Количиство дней</label>
        <input
          type="text"
          name="countDay"
          id = "days"
          className="login__input"
          placeholder={parametrs.countDay}
          onChange={handleChange}
        />
        <input type="submit" className="login__btn" value="Поиск" />
      </div>
    </form>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     parametrs: state.searchHotel.searchParametrs,
//   };
// };

// const mapDispatchToProps = {
//   searchHotel,
// };

export default SearchForm; 
