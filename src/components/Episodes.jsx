import { Link } from "../export";

const Episodes = ({ episodes, slug }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="header">Episodes</h1>
      <div className="flex flex-col gap-5 max-h-96 overflow-y-scroll">
        <div className="grid grid-cols-6 md:grid-cols-4 gap-4 md:w-2/3">
          {episodes.map((episode, index) => (
            <Link
              to={`/anime/${slug}/${episode.slug}`}
              key={index}
              className="flex flex-col md:flex-row gap-3 items-center justify-between px-4 py-2 rounded-lg border border-third bg-third transition-all duration-300 hover:animate-pulse"
            >
              <p className="font-bold text-lg text-second">Eps</p>
              <p className="text-2xl break-words font-bold text-second font-fira">
                {episodes.length - index}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const EpisodesOnEpisode = ({ anime, slug, name }) => {
  return (
    <div className="carousel gap-2 px-0">
      {anime.map((e, index) => (
        <Link
          to={`/anime/${name}/${e.slug}`}
          key={index}
          className={`flex items-center h-full justify-between p-3 rounded-lg min-w-72 border border-second ${
            e.slug === slug ? "bg-third" : ""
          }`}
        >
          <p className="text-xs font-semibold text-second">{e.judul}</p>
        </Link>
      ))}
    </div>
  );
};

export { Episodes, EpisodesOnEpisode };
