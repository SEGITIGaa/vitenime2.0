import { useAnimeDetail } from "../Functions/Fetch";

const AnimeDetail = ({ anime }) => {
  const { studio, rilis, status, skor, genre, durasi } = useAnimeDetail(anime);
  

  return (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 bg-frame bg-contain bg-top md:bg-left bg-no-repeat">
      <img src={anime.gambar} alt={anime.judul} className="anime-img" />

      <div className="flex flex-col gap-10 w-full md:w-2/3">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            {skor && (
              <div className="anime-rating">
                {skor}
                <img src="/skor.svg" alt="skor" className="star" />
              </div>
            )}
            <div className="anime-studio">By {studio} studio</div>
          </div>

          <h1 className="anime-title">{anime.judul}</h1>

          <p className="anime-info">
            {rilis} <span className="text-second font-clash font-semibold mx-2">|</span> {status} 
            <span className="text-second font-clash font-semibold mx-2">|</span> {durasi}/eps
          </p>
        </div>

        <p className="anime-genre">{genre}</p>
      </div>

      <div className="h-1 w-full bg-second/20 rounded-full my-5 md:hidden"></div>
    </div>
  );
};

export default AnimeDetail;
