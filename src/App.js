import './App.css';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/home';
import level1 from './components/level1';

function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="level1" component={level1} />
    </Router>
  );
}

export default App;
