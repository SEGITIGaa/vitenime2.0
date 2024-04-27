import { Link } from '../export'

const SmallCard = ({anime}) => {
  return (
    <Link
    to={`/anime/${anime.slug}`}
    className="snap-start snap-always h-72 md:h-96 flex flex-col gap-3 cursor-pointer"
  >
    <img
      src={anime.gambar}
      alt={anime.judul}
      loading='lazy'
      className="object-cover h-64 md:h-72 rounded-md"
    />
      <p className="text-second font-semibold break-words w-5/6 truncate font-clash text-sm md:text-lg">
        {anime.judul}
      </p>     
  </Link>
  )
}

export default SmallCard
