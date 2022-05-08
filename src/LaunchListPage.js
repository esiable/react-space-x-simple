import LaunchFilter from './LaunchFilter';
import LaunchList from './LaunchList';
import { useEffect, useState } from 'react';

const LaunchListPage = () => {
  const [state, setState] = useState(false);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    requestLaunches();
  }, []);

  async function requestLaunches() {
    const response = await fetch(`https://api.spacexdata.com/v3/launches`);
    const json = await response.json();
    setLaunches(json);
    setState(true);
    console.log('json', json);
  }

  if (!state) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <LaunchFilter launches={launches} setLaunches={setLaunches} />
      <LaunchList launches={launches} />
    </div>
  );
};
export default LaunchListPage;
