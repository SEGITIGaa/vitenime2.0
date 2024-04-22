import { Link } from "../export";

const Card = ({ anime }) => {
  return (
    <Link
      to={`/anime/${anime.slug}`}
      className="snap-start snap-always h-96 col gap-3 cursor-pointer relative"
    >
      <img
        src={anime.gambar}
        alt={anime.judul}
        className="object-cover h-80 rounded-lg"
      />
      <div className="col gap-2 w-56">
        <p className="text-second font-clash font-semibold break-words w-52 truncate text-lg">
          {anime.judul}
        </p>
        <p className="text-second break-words absolute font-fira font-semibold top-2 left-2 text-xs bg-third rounded-xl px-4 w-max py-1.5">
          eps {anime.eps}
        </p>
      </div>
    </Link>
  );
};

export default Card;
