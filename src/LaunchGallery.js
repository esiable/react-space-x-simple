const LaunchGallery = (props) => {
  return (
    <div>
      {props.images.map((element, index) => {
        return <img src={element} alt='' key={index} width='15%' />;
      })}
    </div>
  );
};

export default LaunchGallery;
