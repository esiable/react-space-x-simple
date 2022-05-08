import LaunchRow from './LaunchRow';

const LaunchList = ({ launches }) => {
  return (
    <table className='table table-striped'>
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
        {launches.map((m) => (
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
  );
};

export default LaunchList;
