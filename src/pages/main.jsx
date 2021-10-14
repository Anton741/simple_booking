import SearchForm from '../component/searchForm';
import Favourites from '../component/favourites';
import LineCountFavourites from '../component/lineCounFavorites';
import PathLine from '../component/pathLine';
import Exit from '../component/exit';
import Hotels from '../component/hotels';
import Carousel from '../component/carousel';


const Main = () => {
  return (
    <div className="main__page">
      <div className="main__body">
        <div className="main__row">
          <Exit />
        </div>
        <div className="main__row">
          <div className="main__content">
            <div className="main__column-small">
              <div className="small-column__raw column">
                <SearchForm />
              </div>
              <div className="small-column__raw column">
                <Favourites />
              </div>
            </div>
            <div className="main__column-big column">
              <div className="big-column__row">
                <PathLine />
              </div>
              <div className="big-column__row">
                <Carousel />
              </div>
              <div className="big-column__row">
                <LineCountFavourites />
              </div>
              <div className="big-column__row">
                <div className="hotels__list">
                  <Hotels />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Main;
