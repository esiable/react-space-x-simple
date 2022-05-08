import { useState, useEffect } from 'react';

const LaunchFilter = ({ launches, setLaunches }) => {
  const [launch, setLaunch] = useState('');
  console.log('launches', launches, setLaunches);

  useEffect(() => {
    const searchResult = launches.filter((item) =>
      item.mission_name.toLowerCase().includes(launch.toLowerCase())
    );

    setLaunches(searchResult);
  }, [launch]);

  return (
    <form>
      <label htmlFor='search'>
        {launch}
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
