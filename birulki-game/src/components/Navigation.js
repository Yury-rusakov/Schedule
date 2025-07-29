import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/game">Играть</Link></li>
        <li><Link to="/records">Рекорды</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;