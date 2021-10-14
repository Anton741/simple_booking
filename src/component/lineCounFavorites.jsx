import {useSelector} from 'react-redux'

const LineCountFavourites = () => {
  const bookmark = useSelector(state => state.app.bookmark)
  const nounWithNumerals = (number) => {
    if (number > 20) {
      number = String(number)
      if ([2, 3, 4].includes(number[number.length - 1])) {
        return 'отеля';
      } else if ('1' === number[number.length - 1]) {
        return 'отель';
      } else {
        return 'отелей';
      }
    } else {
      
      if ([2, 3, 4].includes(number)) {
        return 'отеля';
      } else if ([1].includes(number)){
        return 'отель'
      }
      else {
        return 'отелей';
      }
    }
};
  return bookmark.length > 0 ? <p className = 'favorites_line'>Добавлено в Избранное: <b> {bookmark.length} </b>{nounWithNumerals(bookmark.length)}</p> : <p className = 'favorites_line'>Cписок Избраное пуст</p>
}
export default LineCountFavourites;