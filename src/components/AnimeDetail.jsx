import { Helmet } from "react-helmet";
import { useAnimeDetail } from "../Functions/Fetch";

const AnimeDetail = ({ anime }) => {
  const { studio, rilis, status, skor, genre, durasi } = useAnimeDetail(anime);

  const location = window.location.pathname;

  const info = [
    { icons: "/date.svg", content: rilis },
    { icons: "/ongoing.svg", content: status },
    { icons: "/duration.svg", content: durasi },
  ];

  return (
    <>
      <Helmet>
        <title>{`anime network - ${anime.judul}`}</title>
        <meta name="description" content="This is the home page of my website" />
        <meta property="og:title" content={`anime network - ${anime.judul}`} />
        <meta property="og:description" content="This is the home page of my website" />
        <meta property="og:image" content={anime.gambar}/>
        <meta property="og:url" content={`https://animenetwork.vercel.app${location}`} />
      </Helmet>

      <div className="col-to-row items-center gap-5 md:gap-10 bg-frame bg-contain bg-top md:bg-left bg-no-repeat">
        <img src={anime.gambar} alt={anime.judul} className="anime-img" />

        <div className="flex flex-col gap-10 w-full md:w-3/4">
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
            <div className="row gap-5">
              {info.map((e, i) => (
                <div className="row items-center gap-2" key={i}>
                  <img src={e.icons} alt="" className="anime-icons" />
                  <p className="anime-info">{e.content}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="anime-genre">{genre}</p>
        </div>

      </div>
    </>
  );
};

export default AnimeDetail;
