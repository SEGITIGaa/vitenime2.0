import { useFetchAnimesByPage } from '../Functions/Fetch'
import{ BackBtn, Genres, Link, useState } from '../export'

const Navbar = ({genres}) => {
    const {filteredAnime, animes,  getAnime, setRequest, request} = useFetchAnimesByPage('type=complete')
    const [onFocus, setFocus] = useState('')
    console.log(animes);

    const HandleFocus = () => {
      const Num = Math.floor(Math.random() * 24 ) + 1
      setFocus(animes[Num].judul)
    }

    const Submited = (e) => {
      e.preventDefault()
      const value = e.target.querySelector("input").value
      setRequest(value !== "" ? `search=${value}` : "type=complete")
      getAnime(true, `search=${value}`)
    }

    return (
      <div className="col relative">

        <form className="navbar" onSubmit={Submited}>
          <input type="search" name="" id="" onFocus={HandleFocus} onBlur={() => setFocus("")} placeholder={onFocus !== "" ? `coba tonton "${onFocus}"` : "mau nonton apa nihh.."} className="input-search" />
          <button type='submit' className='bg-third rounded-xl p-3 shadow-md'>
            <img src="/Search.svg" alt="" className='w-5 h-5'/>
          </button>
        </form>
        {genres ? <Genres genres={genres} /> : <BackBtn />}

        
        <div className="col gap-3 absolute z-50 top-24 bg-main w-full md:w-3/4 rounded-lg max-h-96 overflow-scroll">
          {request !== 'type=ongoing' ? filteredAnime.map((r, index) => (
            <Link to={`/anime/${r.slug}`} key={index} className='row gap-3 rounded-lg hover:bg-third/70 group p-2'>
              <img src={r.gambar} alt="" className='h-16 rounded-md' />
              <div className="col">
                <p className='text-second/70 group-hover:text-second text-sm md:text-lg font-medium font-clash'>{r.judul}</p>
                <p className='text-second/70 text-xs md:text-sm font-medium font-clash'>{r.eps} episode</p>
              </div>
            </Link>
          )): ''}
        </div>
      </div>
    )
}

export default Navbar
