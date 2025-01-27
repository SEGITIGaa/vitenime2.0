import { Link, useState } from "../export";
import { ArrowDownUp } from "lucide-react";

const Episodes = ({ episodes, slug }) => {
  const [sortir, setSortir] = useState(false);
  const reversed_episode = sortir ? [...episodes].reverse() : episodes;

  const ChangeSortir = () => {
    setSortir(!sortir);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className=" flex items-center justify-between">
        <h1 className="header text-second/70">Episodes</h1>
        <ArrowDownUp
          className={`cursor-pointer ${
            sortir ? "text-second" : "text-second/50"
          }`}
          onClick={ChangeSortir}
        />
      </div>
      <div className="flex flex-col gap-5 md:max-h-96 md:overflow-y-scroll md:eps pr-2">
        <div className="col gap-2 md:w-2/4">
          {reversed_episode.map((episode, index) => (
            <Link
              to={`/anime/${slug}/${episode.slug}`}
              key={index}
              className="flex gap-5 shadow-md items-center px-4 py-2 rounded-lg border border-third bg-third transition-all duration-300 hover:animate-pulse"
            >
              <p className="text-2xl font-fira text-second/50">{index + 1}</p>
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
    <div className="flex flex-col gap-5 max-h-96 overflow-y-scroll py-3 eps">
      <div
        className={`flex-col gap-2 w-full transition-all duration-300 ${
          show ? "grid" : "md:flex hidden"
        }`}
      >
        {anime.map((e, index) => (
          <Link
            to={`/anime/${name}/${e.slug}`}
            key={index}
            className={`flex items-center lg:items-start gap-4 px-4 py-2 rounded-lg border border-third transition-all duration-300 ${
              e.slug === slug ? "bg-second text-third" : "text-second bg-third"
            }`}
          >
            <p className="text-2xl font-fira">{index + 1}</p>
            <h3 className="font-bold text-sm font-satoshi">
              {e.judul}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Episodes, EpisodesOnEpisode };
