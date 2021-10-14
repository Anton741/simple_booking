import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Exit = () => {
  const data = useSelector((state) => state.AuthValidation);
  const bookmark = useSelector((state) => state.app)
  const history = useHistory();
  const handleExit = () => {

    let users = JSON.parse(localStorage.getItem('users'));
    users.forEach(user => {
    if (user.email === data.email && user.password=== data.password){
        data.password = '';
        data.email = ''
        user.bookmarks = bookmark.bookmark;
        bookmark.bookmark = [];
      }
    })
    localStorage.setItem('users', JSON.stringify(users));
    history.push('/');
  };
  return <div className="exit__btn" onClick={handleExit}>
      Выйти 
      <svg className= 'exit__icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 16L20 11L15 6" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 11H8" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  </div>;
};

export default Exit;
