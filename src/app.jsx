import { Route, Switch} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadCity } from './redux/action';
import Main from './pages/main'
import Login from './pages/login'
import './component/style.scss';


function App({ parametrs }) {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(loadCity(parametrs.city, parametrs.date, parametrs.countDay));
  }, []);

  return (
    // <Login/>
    <Switch>
      <Route path="/main" component={Main}></Route>
      <Route path="/" component={Login}></Route>
      {/* {data.formIsValid && <Redirect to = '/main'/>} */}
    </Switch>
  );
}
const mapStateToProps = (state) => {
  return {
    parametrs: state.searchHotel.searchParametrs,
  };
};

export default connect(mapStateToProps, null)(App);
