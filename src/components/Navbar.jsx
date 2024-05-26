import { useNavbar } from '../Functions/Func'
import{ BackBtn, Genres, Recomendations} from '../export'

const Navbar = ({genres}) => {
    const {Submited, HandleFocus, Batal, recomendation, anime, placeholder, request, animes, filteredAnime, setFocus} = useNavbar()

    return (
      <div className="col relative">

        <form className="navbar" onSubmit={Submited}>
          <input type="search" name="" id="" onFocus={HandleFocus} onBlur={() => setFocus("")} placeholder={placeholder} className="input-search" />
          {!recomendation ? 
            <button className='bg-third rounded-xl p-3 shadow-md'>
              <img src="/Search.svg" alt="" className='w-5 h-5'/>
            </button> 
            : 
            <div className="font-semibold cursor-pointer text-indigo-900" onClick={Batal}> batal</div>
          }
        </form>
        {genres ? <Genres genres={genres} /> : <BackBtn />}

      <Recomendations rec={recomendation} animes={animes} req={request} filtered={filteredAnime} anime={anime}/>
      </div>
    )
}

export default Navbar
