import { Link } from 'react-router-dom';

const LaunchRow = ({ flight_number, mission, date, rocket_name }) => {
  return (
    <tr>
      <td>
        <strong>{flight_number}</strong>
      </td>
      <td>{mission}</td>
      <td>{date}</td>
      <td>{rocket_name}</td>
      <td>
        <Link to={`/details/${flight_number}`}>details</Link>
      </td>
    </tr>
  );
};

export default LaunchRow;
