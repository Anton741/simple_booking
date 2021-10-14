import { useSelector } from 'react-redux';
import Hotel from './hotel';
import FilterBtn from './filterBtn'

const Favourites = () => {
  const bookmark = useSelector((state) => state.app.bookmark);
  return (
    <div className="favorites">
      <h1>Избраное</h1>
      <div className="favorites__sorting">
        <FilterBtn name_btn="Рейтинг" />
        <FilterBtn name_btn="Цена" />
      </div>

      {bookmark &&
        bookmark.map((hotel) => {
          return <Hotel hotel={hotel} />;
        })}
    </div>
  );
};

export default Favourites;
