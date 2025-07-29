import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Game from './components/Game';
import RecordsTable from './components/RecordsTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="records" element={<RecordsTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;