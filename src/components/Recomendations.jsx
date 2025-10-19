import { Link } from "../export";

const Recomendations = ({ rec, animes, filtered, searchResults, req, anime, genres }) => {
  // Gunakan searchResults jika ada pencarian, jika tidak gunakan filtered
  const displayAnimes = anime !== "" ? searchResults : filtered;
  
  return rec ? (
    <div className="absolute top-16 left-0 z-50 w-full bg-third rounded-lg shadow-lg">

      {/* Header */}
      <div className="p-4 border-b border-second/20">
        <p className="text-base font-semibold text-second/70">
          {anime !== "" ? `Ketemu nih yang namanya "${anime}"` : "Rekomendasi"}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6 p-2 lg:p-4">
        {/* Genre List */}
        <div className="lg:w-1/4 p-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-second">Genre</h3>
            <Link
              to="/genres"
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-second/70 hover:underline"
            >
              Selengkapnya
            </Link>
          </div>
          <div className="hidden lg:flex flex-col gap-2">
            {genres.slice(0, 5).map((genre, index) => (
              <Link
                to={`/anime/genre/${genre.slug}`}
                key={index}
                className="block text-sm font-medium text-second/70 hover:text-second hover:bg-main/50 rounded-lg px-3 py-2 transition"
                aria-label={`Genre ${genre.judul}`}
              >
                {genre.judul}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden flex-row lg:flex-col gap-2">
            {genres.slice(0, 3).map((genre, index) => (
              <Link
                to={`/anime/genre/${genre.slug}`}
                key={index}
                className="inline-block bg-main/70 hover:bg-main text-white text-xs font-semibold px-3 py-1 rounded-full"
                aria-label={`Genre ${genre.judul}`}
              >
                {genre.judul}
              </Link>
            ))}
          </div>
          <Link
            to="/genres"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-main hover:underline"
          >
            lainnya
            <img
              src={"/arrow.svg"}
              alt="Lihat lebih banyak genre"
              height={16}
              width={16}
            />
          </Link>
        </div>

        {/* Anime List */}
        <div className="flex flex-col gap-6 pr-2 md:w-3/4 overflow-y-scroll eps max-h-80 h-full">
          <h3 className="text-sm font-bold text-second">Anime</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {displayAnimes.length !== 0 ? (
              req !== "type=ongoing" ? (
                displayAnimes.slice(0, 10).map((anime, index) => (
                  <Link
                    to={`/anime/${anime.slug}`}
                    key={index}
                    className="relative block overflow-hidden rounded-lg transition"
                    aria-label={`Anime ${anime.judul}`}
                  >
                    <img
                      src={anime.gambar}
                      alt={`Poster ${anime.judul}`}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="py-3">
                      <p className="text-sm font-semibold text-second truncate">
                        {anime.judul}
                      </p>
                      {anime.eps && (
                        <span className="absolute top-3 left-3 text-xs font-semibold bg-main/80 text-white px-2 py-1 rounded-lg">
                          EPS {anime.eps}
                        </span>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="flex justify-center items-center w-full h-32">
                  <p className="text-second font-medium animate-pulse">
                    Memuat data...
                  </p>
                </div>
              )
            ) : (
              <div className="flex justify-center items-center w-full h-32">
                <p className="text-second font-medium animate-bounce">
                  {anime !== "" ? "Anime tidak ditemukan..." : "Sedang mencari..."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  ) : null;
};

export default Recomendations;