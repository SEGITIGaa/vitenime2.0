import { Link, useState } from "../export";
import { ArrowDownUp } from "lucide-react";

const Episodes = ({ episodes, slug }) => {
  const [sortir, setSortir] = useState(false);
  const formattedData = episodes.map((item) => {
    const match = item.judul.match(/Episode \d+/); // Cari "Episode X"
    return {
      judul: match ? match[0] : null, // Ambil "Episode X"
      slug: item.slug,
      tanggal: item.tanggal,
    };
  });
  const reversed_episode = sortir
    ? [...formattedData].reverse()
    : formattedData;

  const ChangeSortir = () => {
    setSortir(!sortir);
  };

  console.log(reversed_episode);

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
              className="flex items-center gap-3 hover:bg-third/50 rounded-xl lg:px-4 px-2 py-3"
            >
              <div className="text-xl md:text-2xl font-fira font-semibold text-second bg-third rounded-lg h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="flex col-to-row gap-2 items-start lg:items-center w-full lg:justify-between">
                <h3 className="font-semibold text-sm md:text-lg lg:text-xl text-second font-satoshi">
                  {episode.judul}
                </h3>
                <p className="font-semibold text-xs md:text-sm text-second/70 font-satoshi text-left">
                  {episode.tanggal}
                </p>
              </div>
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
