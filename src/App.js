import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LaunchDetails from './LaunchDetails';
import LaunchList from './LaunchList';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to='/'>
          <h1>Space X</h1>
        </Link>
        <Routes>
          <Route path='/details/:id' element={<LaunchDetails />} />
          <Route path='/' element={<LaunchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

render(<App />, document.getElementById('root'));
