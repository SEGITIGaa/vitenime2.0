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
        <h1 className="header text-second/70">Daftar Episode</h1>
        <ArrowDownUp
          className={`cursor-pointer ${
            sortir ? "text-second" : "text-second/50"
          }`}
          onClick={ChangeSortir}
        />
      </div>
      <div className="flex flex-col gap-5 md:max-h-96 md:overflow-y-scroll md:eps pr-2">
        <div className="col">
          {reversed_episode.map((episode, index) => (
            <Link
              to={`/anime/${slug}/${episode.slug}`}
              key={index}
              className="flex flex-row md:items-center lg:gap-x-5 justify-between hover:bg-third/50 rounded-xl lg:px-4 px-2 py-3"
            >
              <div className="flex items-center gap-x-3 lg:gap-x-5 mb-3 md:mb-0">
                <div className="text-xl md:text-2xl font-fira font-semibold text-second bg-third rounded-lg h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-xs md:text-lg lg:text-xl text-second font-satoshi">
                  {episode.judul}
                </h3>
              </div>
              <p className="font-semibold text-xs md:text-sm text-second/70 font-satoshi text-left">
                {episode.tanggal}
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
            <h3 className="font-bold text-sm font-satoshi">{e.judul}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Episodes, EpisodesOnEpisode };
