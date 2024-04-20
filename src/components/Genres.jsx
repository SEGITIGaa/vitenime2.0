import { Link } from "../export";

const Genres = ({ genres }) => {
  return (
    <div className="carousel gap-4">
      {genres.map((genre, index) => (
        <Link to={`/anime/genre/${genre.slug}`} key={index} className="genre min-w-36 text-center max-w-max snap-end snap-always">
          {genre.judul}
        </Link>
      ))}
    </div>
  );
};

export default Genres;
