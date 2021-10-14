import {  useSelector } from 'react-redux';
import Hotel from './hotel'


const Hotels = () => {
  const hotels = useSelector((state) => state.searchHotel.hotel_city);
  return (
    <>
      {hotels.map(hotel => {
      return <Hotel hotel={hotel} key={hotel.hotelId} />})}
    </>
  );
}

export default Hotels;