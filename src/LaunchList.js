import { useState, useEffect } from 'react';
import LaunchRow from './LaunchRow';

const LaunchList = () => {
  const [mission, setMission] = useState('');
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    console.log('requestMissions');
    requestMissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestMissions() {
    const response = await fetch('https://api.spacexdata.com/v3/launches');
    const json = await response.json();

    if (!mission) {
      setMissions(json);
    } else {
      const filteredMissions = json.filter((e) => {
        if (e.mission_name.toLowerCase().includes(mission.toLowerCase())) {
          return e;
        }
      });

      setMissions(filteredMissions);
    }
  }

  return (
    <div className='search-mission'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestMissions();
        }}
      >
        <label htmlFor='mission'>
          <input
            id='mission'
            value={mission}
            placeholder='Search for mission'
            onChange={(event) => setMission(event.target.value)}
          />
        </label>
        <button>Search mission</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Flight number</th>
            <th>Mission</th>
            <th>Date</th>
            <th>Rocket</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((m) => (
            <LaunchRow
              flight_number={m.flight_number}
              mission={m.mission_name}
              key={m.flight_number + Math.random(0, 100)}
              date={m.launch_date_utc}
              rocket_name={m.rocket.rocket_name}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaunchList;
