import LaunchFilter from './LaunchFilter';
import LaunchList from './LaunchList';
import Paginator from './Paginator';
import { useEffect, useState } from 'react';

const LaunchListPage = () => {
  const [state, setState] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [localCache, setLocalCache] = useState();

  useEffect(() => {
    requestLaunches();
  }, []);

  async function requestLaunches() {
    const response = await fetch(`https://api.spacexdata.com/v3/launches`);
    const json = await response.json();
    setLocalCache(json);
    setLaunches(json);
    setState(true);
    console.log('json', json);
  }

  if (!state) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <LaunchFilter localCache={localCache} setLaunches={setLaunches} />
      <Paginator />
      <LaunchList launches={launches} />
    </div>
  );
};
export default LaunchListPage;
