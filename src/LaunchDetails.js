import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import LaunchGallery from './LaunchGallery';

const LaunchDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    requestLaunchDetails();
  }, []);

  async function requestLaunchDetails() {
    const response = await fetch(
      `https://api.spacexdata.com/v3/launches/${id}`
    );
    const json = await response.json();
    setDetail(json);
    console.log(json);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Date</th>
            <th>Location</th>
            <th>Rocket</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.mission_name || 'not loaded'}</td>
            <td>{detail.launch_date_utc || 'not loaded'}</td>
            <td>
              {(detail.launch_site && detail.launch_site.site_name) ||
                'not loaded'}
            </td>
            <td>
              {(detail.rocket && detail.rocket.rocket_name) || 'not loaded'}
            </td>
            <td>{detail.launch_success ? 'success' : 'failure'}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2> Video </h2>
      <YouTube
        videoId={(detail.links && detail.links.youtube_id) || 'not loaded'}
      />
      <h2>Gallery</h2>
      {Object.keys(detail).length !== 0 ? (
        <LaunchGallery images={detail.links.flickr_images} />
      ) : (
        'not loaded'
      )}
    </div>
  );
};

export default LaunchDetails;
