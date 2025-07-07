import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useResolvedPath,
  useMatch
} from 'react-router-dom';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Домашняя страница</Link></li>
        <li><Link to="/about">Контакты</Link></li>
        <li><Link to="/topics">Темы</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/topics/" element={<Topics />} />
    </Routes>
  </Router>
);

const Home = () => <h2>Домашняя страница</h2>;
const About = () => <h2>Контакты</h2>;

function Topics() {
  const resolved = useResolvedPath('');
  const match = useMatch({ path: resolved.pathname, end: false });

  return (
    <>
      <h2>Темы</h2>
      <ul>
        <li><Link to="components">Компоненты</Link></li>
        <li><Link to="props-vs-state">Пропы против состояния</Link></li>
      </ul>

      <Routes>
        <Route path=":topicId" element={<Topic />} />
        <Route path="" element={<h3>Пожалуйста, выберите тему.</h3>} />
      </Routes>
    </>
  );
}

function Topic() {
  const { topicId } = useParams();
  return <h3>Идентификатор выбранной темы: {topicId}</h3>;
}

export default App;


