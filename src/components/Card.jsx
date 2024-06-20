import "./Card.css";

export function Card({ user: { picture, name, location, dob } }) {
  return (
    <div className="card">
      <img src={picture.medium} width="70%" />
      <h2>{`${name.first} ${name.last}`}</h2>
      <p>{location.country}</p>
      <p>{dob.age} years</p>
    </div>
  );
}
