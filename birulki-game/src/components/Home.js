import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Игра в бирюльки</h1>
      <p>Классическая игра на ловкость и точность движений</p>
      <button onClick={() => navigate('/game')}>Начать игру</button>
      <button onClick={() => navigate('/records')}>Рекорды</button>
    </div>
  );
};

export default Home;