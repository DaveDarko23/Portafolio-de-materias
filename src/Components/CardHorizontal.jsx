const CardHorizontal = ({ title, text }) => {
  return (
    <div className="card-info-container-horizontal">
      <div className="card-info">
        <h2>{title}</h2>
        <hr />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardHorizontal;
