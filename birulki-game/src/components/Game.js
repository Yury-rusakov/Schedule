import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';

const Game = () => {
  const { gameState, setGameState } = useGame();
  const { score, playerName, sticks, isGameStarted } = gameState;
  const gameBoardRef = useRef(null);
  const navigate = useNavigate();

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
        color: `hsl(${Math.random() * 60 + 10}, 70%, 50%)`
      });
    }
    
    setGameState(prev => ({ ...prev, sticks: newSticks }));
  };

  const startGame = () => {
    if (!playerName.trim()) {
      alert('Введите ваше имя!');
      return;
    }
    setGameState(prev => ({ ...prev, isGameStarted: true, score: 0 }));
    initSticks();
  };

  const endGame = () => {
    if (score > 0) {
      const newRecord = {
        name: playerName,
        score: score,
        date: new Date().toLocaleDateString()
      };
      
      const records = JSON.parse(localStorage.getItem('birulki-records') || '[]');
      const updatedRecords = [...records, newRecord]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      
      localStorage.setItem('birulki-records', JSON.stringify(updatedRecords));
    }
    
    setGameState(prev => ({ ...prev, isGameStarted: false }));
  };

  const collectStick = (id) => {
    setGameState(prev => {
      const updatedSticks = prev.sticks.map(stick => 
        stick.id === id ? { ...stick, collected: true } : stick
      );
      return { ...prev, sticks: updatedSticks, score: prev.score + 1 };
    });
  };

  return (
    <div className="game-container">
      {!isGameStarted ? (
        <div className="game-start">
          <h2>Игра в бирюльки</h2>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setGameState(prev => ({ ...prev, playerName: e.target.value }))}
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
          <div className="game-controls">
            <button onClick={endGame}>Закончить игру</button>
            <button onClick={() => navigate('/records')}>Рекорды</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;