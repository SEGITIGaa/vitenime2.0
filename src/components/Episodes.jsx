import { Link } from "../export";

const Episodes = ({ episodes, slug }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="header text-second/70">Episodes</h1>
      <div className="flex flex-col gap-5 max-h-96 overflow-y-scroll">
        <div className="grid grid-cols-6 md:grid-cols-4 gap-4 md:w-2/3">
          {episodes.map((episode, index) => (
            <Link
              to={`/anime/${slug}/${episode.slug}`}
              key={index}
              className="flex flex-col md:flex-row gap-3 shadow-md items-center justify-between px-4 py-2 rounded-lg border border-third bg-third transition-all duration-300 hover:animate-pulse"
            >
              <p className="font-bold text-lg text-second">Eps</p>
              <p className="text-2xl font-bold text-second font-fira">
                {episodes.length - index}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const EpisodesOnEpisode = ({ anime, slug, name, show }) => {
  return (
    <div className="flex flex-col gap-5 max-h-96 overflow-y-scroll">
      <div className={`grid-cols-6 md:grid-cols-3 gap-4 w-full transition-all duration-300 ${show ? 'grid' : 'md:grid hidden'}` }>
        {anime.map((e, index) => (
          <Link
            to={`/anime/${name}/${e.slug}`}
            key={index}
            className={`flex flex-col md:flex-row gap-3 items-center justify-between px-4 py-2 rounded-lg border border-third transition-all duration-300 ${
              e.slug === slug ? "bg-second text-third" : "text-second bg-third"
            }`}
          >
            <p className="font-bold text-lg">Eps</p>
            <p className="text-2xl font-bold font-fira">
              {anime.length - index}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Episodes, EpisodesOnEpisode };
