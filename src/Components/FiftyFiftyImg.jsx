const FiftyFiftyImg = ({ url, title, text }) => {
  return (
    <div className="container-fifty">
      <div className="container-fifty-img">
        <img src={url} alt="" />
      </div>
      <div className="container-fifty-text">
        <h2>{title}</h2>
        <hr />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FiftyFiftyImg;
