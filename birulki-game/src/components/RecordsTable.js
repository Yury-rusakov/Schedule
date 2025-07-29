import { useEffect, useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { useNavigate } from 'react-router-dom';

const RecordsTable = () => {
  const [records, setRecords] = useState([]);
  const { gameState, resetGameState } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('birulki-records');
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, []);

  const clearRecords = () => {
    if (window.confirm('Очистить все рекорды?')) {
      localStorage.removeItem('birulki-records');
      setRecords([]);
    }
  };

  const continueGame = () => {
    navigate('/game');
  };

  return (
    <div className="records-table">
      <h2>Таблица рекордов</h2>
      
      {records.length === 0 ? (
        <p>Рекордов пока нет</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Место</th>
                <th>Имя</th>
                <th>Счёт</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{record.name}</td>
                  <td>{record.score}</td>
                  <td>{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="records-controls">
            <button onClick={clearRecords}>Очистить рекорды</button>
            {gameState.isGameStarted && (
              <button onClick={continueGame}>Продолжить игру</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RecordsTable;