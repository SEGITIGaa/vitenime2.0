import { Link } from "../export";

const Genres = ({ genres }) => {
  return (
    <div className="carousel gap-2">

      <div className="genre bg-second">
        <p className="break-normal text-third">All</p>
      </div>
      {genres.map((genre, index) => (
        <Link to={`/anime/genre/${genre.slug}`} key={index} className="genre min-w-36 text-center max-w-max snap-end snap-always">
          {genre.judul}
        </Link>
      ))}
    </div>
  );
};

export default Genres;
