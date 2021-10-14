import {useDispatch, useSelector} from "react-redux"
import {sortingHotel} from "../redux/action"

const FilterBtn = ({name_btn}) => {
  const dispatch = useDispatch()
  let sortField = useSelector((state) => state.app.currentSort.item);
  let sortMode = useSelector((state) => state.app.currentSort.mode);
  return ( 
    <div className="filter__item">
      <button className={name_btn=== sortField ?  'filter__btn filter__btn-active' : 'filter__btn'} onClick = {(e) => dispatch(sortingHotel(e.target.innerHTML))}>{name_btn}</button>
      <div className="filter__arrows">
        <svg className = {'asc'=== sortMode ?  'arrow-up arrow arrow-active' : 'arrow-up arrow'} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.014596 4.24264L4.25724 0L8.49988 4.24264Z" />
        </svg>
        <svg className = {'desc'=== sortMode ?  'arrow-up arrow arrow-active' : 'arrow-up arrow'} width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.49988 1.83245L7.43922 0.77179L4.25724 3.95377L1.07526 0.77179L0.014596 1.83245L4.25724 6.07509L8.49988 1.83245Z"/>
        </svg>
      </div>
    </div>
  );
}

export default FilterBtn;