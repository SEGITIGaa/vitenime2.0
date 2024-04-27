import { Link } from "../export";

const Genres = ({ genres }) => {
  return (
    <>
      <div className="w-full items-center justify-between flex">
        <h1 className="header">Genre</h1>
        <Link to="/genres" className="arrow-btn">
          <p className="text-second/70">lengkapnya</p>
          <img src={"/arrow.svg"} alt="" height={18} width={18} />
        </Link>
      </div>
      <div className="carousel gap-4 px-0">
        {genres.map((genre, index) => (
          <Link to={`/anime/genre/${genre.slug}`} key={index} className="genre">
            {genre.judul}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Genres;
