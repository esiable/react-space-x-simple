import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react/cjs/react.production.min';
import LaunchDetails from './LaunchDetails';
import LaunchList from './LaunchList';

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Link to='/'>
          <h1>Space X</h1>
        </Link>
        <Routes>
          <Route path='/details/:id' element={<LaunchDetails />} />
          <Route path='/' element={<LaunchList />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
