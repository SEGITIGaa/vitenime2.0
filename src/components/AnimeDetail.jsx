import { Helmet } from "react-helmet";
import { useAnimeDetail } from "../Functions/Fetch";

const AnimeDetail = ({ anime }) => {
  const { studio, rilis, status, skor, genre, durasi, produser } =
    useAnimeDetail(anime);

  const location = window.location.pathname;

  console.log(anime);

  const genreArray = genre.split(", ").map((item) => item.trim()); // Menghapus spasi ekstra
  console.log(genreArray);

  const info = [
    { icons: "/date.svg", content: rilis },
    { icons: "/ongoing.svg", content: status },
    { icons: "/duration.svg", content: durasi },
  ];

  return (
    <>
      <Helmet>
        <title>{`anime network - ${anime.judul}`}</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
        <meta property="og:title" content={`anime network - ${anime.judul}`} />
        <meta
          property="og:description"
          content="This is the home page of my website"
        />
        <meta property="og:image" content={anime.gambar} />
        <meta
          property="og:url"
          content={`https://animenetwork.vercel.app${location}`}
        />
      </Helmet>

      <div className="col-to-row items-center gap-5 md:gap-10 bg-frame bg-contain bg-top md:bg-left bg-no-repeat">
        <img src={anime.gambar} alt={anime.judul} className="anime-img" />

        <div className="flex flex-col gap-8 w-full md:w-3/4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              {skor && (
                <div className="anime-rating">
                  <img src="/skor.svg" alt="skor" className="star" />
                  {skor}
                </div>
              )}
              <div className="anime-studio">{studio}</div>
            </div>

            <h1 className="anime-title">{anime.judul}</h1>
            <div className="row gap-6">
              {info.map((e, i) => (
                <div className="row items-center gap-3" key={i}>
                  <img src={e.icons} alt="" className="anime-icons" />
                  <p className="anime-info">{e.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {genreArray.map((Element, index) => (
              <span
                className="inline-block bg-third text-white text-xs font-semibold px-3 py-1 rounded-full"
                key={index}
              >
                {Element}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;
