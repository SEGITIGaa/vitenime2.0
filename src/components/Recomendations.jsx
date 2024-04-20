import { Card, Link, LoadingCard, Suspense } from "../export";

const Recomendations = ({ AllAnimes }) => {
  // Mengacak array anime
  const shuffledAnimes = AllAnimes.sort(() => Math.random() - 0.5);
  // Memilih 5 anime pertama setelah pengacakan
  const randomAnimes = shuffledAnimes.slice(0, 5);

  return (
    <section className="flex flex-col gap-5">
      <h1 className="h1">rekomendasi buat kamu</h1>

      <div className="carousel">
        <Suspense fallback={<LoadingCard />}>
          {randomAnimes.map((anime, index) => (
            <Card anime={anime} key={index} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default Recomendations;
