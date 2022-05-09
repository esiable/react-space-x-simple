import { useState, useEffect } from 'react';

const LaunchFilter = ({ localCache, setLaunches }) => {
  const [launch, setLaunch] = useState('');

  useEffect(() => {
    const searchResult = localCache.filter((item) =>
      item.mission_name.toLowerCase().includes(launch.toLowerCase())
    );

    setLaunches(searchResult);
  }, [launch]);

  return (
    <form>
      <label htmlFor='search'>
        <input
          type='text'
          placeholder='Search mission ...'
          id='launch'
          onChange={(e) => setLaunch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default LaunchFilter;
