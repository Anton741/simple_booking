import { useSelector, useDispatch } from 'react-redux';
import {addBookmark, deleteBookmark} from '../redux/action'
import dateFormat from 'dateformat';
import imgPath from '../img/house.svg';
import HotelRate from './hotelRate';
import Bookmarks from './bookmark';

const Hotel = ({ hotel }) => {
  const parametrs = useSelector((state) => state.searchHotel.searchParametrs);
  const dispatch = useDispatch()
  const nounWithNumerals = (number) => {
    if (number > 20) {
      number = String(number);
      if (['2', '3', '4'].includes(number[number.length - 1])) {
        return 'дня'}
      else if ('1' === number[number.length - 1]) {return 'день';} 
      else {return 'дней';}
    } else {
      if ([2, 3, 4].includes(number)) {return 'дня'}
      else if (1 === number) {return 'день'} 
      else {return 'дней'}
    }
  };

  const onBookmark = (hotel) => {
    if (hotel.bookmark === undefined || hotel.bookmark === false) {
      hotel.bookmark = true
      dispatch(addBookmark(hotel));
    }else{
      hotel.bookmark = false;
      dispatch(deleteBookmark(hotel));
    }
  };
  return (
    <div className="hotel__card">
      <div className="hotel__column">
        <div className="hotel__image">
          <img src={imgPath} alt="hotels_picture" />
        </div>
      </div>
      <div className="hotel__column hotel__column-big">
        <div className="hotel__name">{hotel.hotelName}</div>
        <div className="hotel__date">
          {dateFormat(new Date(parametrs.date), 'dd mmmm, yyyy')} -{' '}
          <span className="hotel__days">{parametrs.countDay} {nounWithNumerals(Number(parametrs.countDay))}</span>
        </div>
        <HotelRate rate={Number(hotel.stars)} />
      </div>
      <div className="hotel__column">
        <Bookmarks onBookmark={onBookmark} hotel={hotel} />
        <div className="hotel__price">
          <span className="price">Price: </span>
          {Math.round(Number(hotel.priceAvg) * parametrs.countDay)} ₽
        </div>
      </div>
    </div>
  );
};

export default Hotel;
