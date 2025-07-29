import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(() => {
    const saved = localStorage.getItem('birulki-game-state');
    return saved ? JSON.parse(saved) : {
      score: 0,
      playerName: '',
      sticks: [],
      isGameStarted: false
    };
  });

  useEffect(() => {
    localStorage.setItem('birulki-game-state', JSON.stringify(gameState));
  }, [gameState]);

  const resetGameState = () => {
    setGameState({
      score: 0,
      playerName: '',
      sticks: [],
      isGameStarted: false
    });
  };

  return (
    <GameContext.Provider value={{ gameState, setGameState, resetGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);