import { Link } from "../export";

const Episodes = ({ episodes, slug }) => {
  console.log(episodes);
  const reversed_episode = [ ...episodes].reverse()

  return (
    <div className="flex flex-col gap-5">
      <h1 className="header text-second/70">Episodes</h1>
      <div className="flex flex-col gap-5 max-h-96 overflow-y-scroll eps pr-2">
        <div className="col gap-2 md:w-2/4">
          {reversed_episode.map((episode, index) => (
            <Link
              to={`/anime/${slug}/${episode.slug}`}
              key={index}
              className="flex gap-5 shadow-md items-center px-4 py-2 rounded-lg border border-third bg-third transition-all duration-300 hover:animate-pulse"
            >
              <p className="text-2xl font-fira text-second/50">
                {index + 1}
              </p>
              <h3 className="font-semibold text-sm md:text-lg text-second font-satoshi">
                {episode.judul}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const EpisodesOnEpisode = ({ anime, slug, name, show }) => {
  return (
    <div className="flex flex-col gap-5 max-h-96 overflow-y-scroll px-2 eps">
      <div
        className={`grid-cols-4 md:grid-cols-2 gap-4 w-full transition-all duration-300 ${
          show ? "grid" : "md:grid hidden"
        }`}
      >
        {anime.map((e, index) => (
          <Link
            to={`/anime/${name}/${e.slug}`}
            key={index}
            className={`flex flex-col md:flex-row gap-3 items-center justify-between px-4 py-2 rounded-lg border border-third transition-all duration-300 ${
              e.slug === slug ? "bg-second text-third" : "text-second bg-third"
            }`}
          >
            <p className="font-bold text-xs md:text-lg">Eps</p>
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
