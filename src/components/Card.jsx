import "./Card.css";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.image} width="70%" />
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  );
}
