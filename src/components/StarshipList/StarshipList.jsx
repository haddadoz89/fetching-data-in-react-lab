import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <section>
      <ul>
        {starships.length ? (
          starships.map((s) => (
              <StarshipCard key={s.name} starship={s} />
          ))
        ) : (
          <p>No starships found.</p>
        )}
      </ul>
    </section>
  );
};

export default StarshipList;