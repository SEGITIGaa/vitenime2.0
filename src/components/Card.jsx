import { Link } from "../export";

const Card = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.slug}`} className="snap-start snap-always h-96 col gap-3 cursor-pointer relative group">
      <img src={anime.gambar} alt={anime.judul} loading='lazy' className="object-cover h-80 rounded-lg group-hover:scale-105 transition-all duration-300"/>
      <div className="col gap-2 w-56">
        <p className="text-second font-clash font-semibold break-words w-52 truncate text-lg group-hover:text-wrap transition-all duration-500">
          {anime.judul}
        </p>
        <p className="text-second break-words absolute font-fira font-semibold top-2 left-2 text-xs bg-third/80 rounded-xl px-4 w-max py-1.5">
          eps {anime.eps}
        </p>
      </div>
    </Link>
  );
};

export default Card;
