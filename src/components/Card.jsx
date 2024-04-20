import { Link } from "../export";

const Card = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.slug}`} className="snap-start snap-always h-96 flex flex-col gap-3 items-center cursor-pointer">
      <img
        src={anime.gambar}
        alt={anime.judul}
        width={252}
        height={288}
        className="object-cover h-72 rounded-md"
      />
      <div className="flex flex-col gap-2 items-center w-56">
        <p className="text-second font-semibold break-words w-52 truncate text-center text-lg">
          {anime.judul}
        </p>
        <p className="text-second break-words truncate text-center text-xs">
          {anime.eps} episode
        </p>
      </div>
    </Link>
  );
};

export default Card;
