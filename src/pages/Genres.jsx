import { BackBtn, Layout, Link, useEffect, useState } from "../export";
const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const getGenres = async () => {
    const response = await fetch("https://web-anime-psi.vercel.app/genre");
    const data = await response.json();
    setGenres(data);
  };
  useEffect(() => {
    getGenres();
  }, []);
  return (
    <Layout>
      <BackBtn />
      <h1 className="header mt-5">Pilih genre yg mau kamu tonton!</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {genres
          ? genres.map((genre, i) => (
              <Link to={`/anime/genre/${genre.slug}`} key={i} className="genre">
                {genre.judul}
              </Link>
            ))
          : Array.from({ length: 7 }).map((_, i) => (
              <div div className="genre h-12 animate-pulse">p</div>
            ))}
      </div>
    </Layout>
  );
};

export default GenresPage;
