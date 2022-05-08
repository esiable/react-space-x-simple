import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LaunchDetails from './LaunchDetails';
import LaunchListPage from './LaunchListPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to='/'>
          <h1>Space X</h1>
        </Link>
        <Routes>
          <Route path='/details/:id' element={<LaunchDetails />} />
          <Route path='/' element={<LaunchListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

render(<App />, document.getElementById('root'));
