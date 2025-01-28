import { Card, Link, LoadingCard, Suspense} from "../export";

const OngoingAnimes = ({ ongoingAnimes }) => {

  return (
    <section className="col gap-8 mt-16">
      <div className="w-full items-center justify-between flex">
        <h1 className="header">Lagi ongoing</h1>
        <Link to="/ongoing" className="arrow-btn">
          <p className="text-second/70 text-xs">lengkapnya</p>
          <img src={"/arrow.svg"} alt="" height={18} width={18} />
        </Link>
      </div>

      <div className="carousel h-[486px] items-start">
        <Suspense fallback={<LoadingCard />}>
          {ongoingAnimes.map((anime, index) => (
            <Card anime={anime} key={index} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default OngoingAnimes;
