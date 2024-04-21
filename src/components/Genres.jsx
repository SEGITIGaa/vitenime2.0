import { Link } from "../export";

const Genres = ({ genres }) => {
  return (
    <div className="carousel gap-4">
      {genres.map((genre, index) => (
        <Link to={`/anime/genre/${genre.slug}`} key={index} className="genre">
          {genre.judul}
        </Link>
      ))}
    </div>
  );
};

export default Genres;
