import { BackBtn, Layout, Link} from "../export";
const GenresPage = ({genres}) => {
  return (
    <Layout>
      <BackBtn />
      <h1 className="header mt-5">Pilih genre yg mau kamu tonton!</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-4/5">
        {genres
          ? genres.map((genre, i) => (
              <Link to={`/anime/genre/${genre.slug}`} key={i} className="genre w-full">
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
