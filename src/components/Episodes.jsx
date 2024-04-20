import { Link } from "../export";

const Episodes = ({ episodes, slug }) => {
  return (
    <div className="flex flex-col gap-5 max-h-96">
      <h1 className="h1">Episodes</h1>

      <div className="flex flex-col gap-2 md:w-2/3">
        {episodes.map((episode, index) => (
          <Link
            to={`/anime/${slug}/${episode.slug}`}
            key={index}
            className="flex items-center justify-between border rounded-lg px-4 py-3 border-second"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs md:text-lg w-2/3 md:w-full break-words font-semibold">
                {episode.judul}
              </p>
              <p className="text-[10px] md:text-xs">{episode.tanggal}</p>
            </div>
            <img src="/arrow.svg" alt="arrow" className="w-4 h-4" />
          </Link>
        ))}
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
