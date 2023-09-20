import CardVertical from "./CardVertical";

const FiftyFiftyCard = ({ text, title, textCard }) => {
  return (
    <section className="fifty-fifty-card">
      <div className="flex-column">
        <h1>{title-text}</h1>
        <p className="fifty-fifty-card-p">{text}</p>
      </div>
      <CardVertical title={title} text={textCard} />
    </section>
  );
};

export default FiftyFiftyCard;
