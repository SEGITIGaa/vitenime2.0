import { Link } from "../export";

const Genres = ({ genres }) => {
  return (
    <div className="row items-center">
      <div className="carousel gap-4 px-0 w-11/12 relative">
        {genres.map((genre, index) => (
          <Link to={`/anime/genre/${genre.slug}`} key={index} className="genre">
            {genre.judul}
          </Link>
        ))}
        <div className="absolute right-0 h-full w-10 bg-gradient-to-tl from-main to-transparent"></div>
      </div>
      <Link to="/genres" className="arrow-btn">
        <img src={"/arrow.svg"} alt="" height={24} width={24} />
      </Link>
    </div>
  );
};

export default Genres;
