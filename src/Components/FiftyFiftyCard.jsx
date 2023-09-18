import CardVertical from "./CardVertical";

const FiftyFiftyCard = ({ text, title, textCard }) => {
  return (
    <section className="fifty-fifty-card">
      <p className="fifty-fifty-card-p">{text}</p>
      <CardVertical title={title} text={textCard} />
    </section>
  );
};

export default FiftyFiftyCard;
