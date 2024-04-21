import React from "react";

const AnimeDetail = ({ anime }) => {
    
  const studio = anime ? anime.studio.split(": ")[1] : "";
  const rilis = anime ? anime.rilis.split(": ")[1] : "";
  const status = anime ? anime.status.split(": ")[1] : "";
  const skor = anime ? anime.skor.split(": ")[1] : "";
  const genre = anime ? anime.genre.split(": ")[1] : "";
  const durasi = anime ? anime.durasi.split(": ")[1] : "";

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

          <h1 className="anime-title font-fira">{anime.judul}</h1>

          <p className="anime-info">
            {rilis} | {status} | {durasi}/eps
          </p>
        </div>

        <p className="anime-genre">{genre}</p>
      </div>

      <div className="h-1 w-full bg-second/20 rounded-full my-5"></div>
    </div>
  );
};

export default AnimeDetail;
