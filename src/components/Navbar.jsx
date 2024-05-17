import { useFetchAnimesByPage } from '../Functions/Fetch'
import{ useState } from '../export'

const Navbar = ({getAnimes, setRequest}) => {
    const {animes} = useFetchAnimesByPage()
    const [onFocus, setFocus] = useState('')

    const HandleFocus = () => {
      const Num = Math.floor(Math.random() * 24 ) + 1
      setFocus(animes[Num].judul)
    }

    const Submited = (e) => {
      e.preventDefault()
      const value = e.target.querySelector("input").value
      setRequest(`search=${value}`)
      getAnimes(true, `search=${value}`)
    }

    return (
      <form className="navbar" onSubmit={Submited}>
      <input type="search" name="" id="" onFocus={HandleFocus} onBlur={() => setFocus("")} placeholder={onFocus !== "" ? `coba tonton "${onFocus}"` : "mau nonton apa nihh.."} className="input-search" />
      <button type='submit' className='bg-third rounded-xl p-3 shadow-md'>
        <img src="/Search.svg" alt="" className='w-5 h-5'/>
      </button>

      </form>
    )
}

export default Navbar
