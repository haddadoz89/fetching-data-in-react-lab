const StarshipCard = ({ starship }) => {
  return (
    <li>
      <h3>{starship.name}</h3>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Class:</strong> {starship.starship_class}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
    </li>
  );
};

export default StarshipCard;
