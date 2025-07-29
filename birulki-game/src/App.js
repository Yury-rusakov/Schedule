import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import Layout from './components/Layout';
import Home from './components/Home';
import Game from './components/Game';
import RecordsTable from './components/RecordsTable';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="game" element={<Game />} />
            <Route path="records" element={<RecordsTable />} />
          </Route>
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;