import { Link } from "../export"

const Recomendations = ({rec, animes, filtered, req, anime}) => {
  return (
    rec ?
        <div className="col gap-3 absolute z-50 top-24 bg-main w-full md:w-3/4 rounded-lg max-h-72 py-3 overflow-y-scroll eps">
          {anime !== '' ?
          <p className="text-sm font-semibold text-second/70 mb-5">ketemu nih yang namanya "{anime}"</p>
          :
          <p className="text-sm font-semibold text-second/70 mb-5">Rekomendasi</p>
            }
          {animes.length !== 0 ? 
            req !== 'type=ongoing' ? filtered.slice(0, 10).map((r, index) => (
              <Link to={`/anime/${r.slug}`} key={index} className='row gap-3 rounded-lg hover:bg-third/70 group p-2'>
                <img src={r.gambar} alt="" className='h-16 rounded-md' />
                  <p className='text-second group-hover:text-second text-sm md:text-lg font-medium font-clash md:w-2/4'>{r.judul}</p>
              </Link>
            )): 'loading'
            : 
            <p className="text-second font-semibold text-lg animate-bounce">sedang mencari..</p>
            }
        </div>
        : ""  
      
  )
}

export default Recomendations
