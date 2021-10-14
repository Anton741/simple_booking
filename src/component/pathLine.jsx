import {useSelector} from "react-redux"
import dateFormat from 'dateformat';

const PathLine = () => {
  const parametrs = useSelector((state) => state.searchHotel.searchParametrs);
  return ( 
    <div className="path">
      <p className="path__text">Отели <span> > </span> {parametrs.city} </p>
      <p className="path__date">{dateFormat(new Date(parametrs.date), 'dd mmmm yyyy')} </p>
    </div>
  );
}
export default PathLine;