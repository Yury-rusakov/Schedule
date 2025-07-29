import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [sticks, setSticks] = useState([]);
  const gameBoardRef = useRef(null);
  const navigate = useNavigate();

  // Загрузка рекордов
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem('birulki-records');
    return saved ? JSON.parse(saved) : [];
  });

  // Сохранение рекордов
  useEffect(() => {
    localStorage.setItem('birulki-records', JSON.stringify(records));
  }, [records]);

  // Инициализация бирюлек
  const initSticks = () => {
    const newSticks = [];
    const boardWidth = gameBoardRef.current?.clientWidth || 500;
    const boardHeight = gameBoardRef.current?.clientHeight || 300;
    
    for (let i = 0; i < 30; i++) {
      newSticks.push({
        id: i,
        x: Math.random() * (boardWidth - 30),
        y: Math.random() * (boardHeight - 100),
        rotation: Math.random() * 360,
        collected: false,
        color: `hsl(${Math.random() * 60 + 10}, 70%, 50%)` // Оттенки коричневого
      });
    }
    
    setSticks(newSticks);
  };

  const startGame = () => {
    if (!playerName.trim()) {
      alert('Введите ваше имя!');
      return;
    }
    setGameStarted(true);
    setScore(0);
    initSticks();
  };

  const endGame = () => {
    if (score > 0) {
      setRecords(prev => {
        const newRecord = {
          name: playerName,
          score: score,
          date: new Date().toLocaleDateString()
        };
        return [...prev, newRecord]
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);
      });
    }
    setGameStarted(false);
  };

  const collectStick = (id) => {
    setSticks(prev => 
      prev.map(stick => 
        stick.id === id ? { ...stick, collected: true } : stick
      )
    );
    setScore(prev => prev + 1);
  };

  return (
    <div className="game-container">
      {!gameStarted ? (
        <div className="game-start">
          <h2>Игра в бирюльки</h2>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Ваше имя"
          />
          <button onClick={startGame}>Начать игру</button>
          <button onClick={() => navigate('/records')}>Таблица рекордов</button>
        </div>
      ) : (
        <div className="game-area">
          <h3>Игрок: {playerName}</h3>
          <div className="score">Собрано бирюлек: {score}</div>
          <div 
            className="game-board" 
            ref={gameBoardRef}
            style={{ position: 'relative', height: '300px', border: '1px solid #ccc' }}
          >
            {sticks.map(stick => (
              !stick.collected && (
                <div
                  key={stick.id}
                  onClick={() => collectStick(stick.id)}
                  style={{
                    position: 'absolute',
                    left: `${stick.x}px`,
                    top: `${stick.y}px`,
                    width: '30px',
                    height: '6px',
                    backgroundColor: stick.color,
                    transform: `rotate(${stick.rotation}deg)`,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(${stick.rotation}deg) scale(1.1)`}
                  onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${stick.rotation}deg)`}
                />
              )
            ))}
          </div>
          <button onClick={endGame}>Закончить игру</button>
        </div>
      )}
    </div>
  );
};

export default Game;