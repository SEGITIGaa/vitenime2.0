import{ useState} from '../export'

const Navbar = ({ongoingAnimes, getAnimes, setRequest}) => {
    const [onFocus, setFocus] = useState('')

    const HandleFocus = () => {
      const Num = Math.floor(Math.random() * 24 ) + 1
      setFocus(ongoingAnimes[Num].judul)
    }
    return (
      <form className="navbar" onSubmit={(e) => {
        e.preventDefault()
        const value = e.target.querySelector("input").value
        setRequest(`search=${value}`)
        getAnimes(true, `search=${value}`)
      }}>

      <button type='submit' className='text-second bg-third rounded-xl p-3 shadow-md shadow-slate-50'>
        <img src="/Search.svg" alt="" className='w-5 h-5'/>
      </button>
  
        <input type="search" name="" id="" onFocus={HandleFocus} onBlur={() => setFocus("")} placeholder={onFocus !== "" ? `coba tonton "${onFocus}"` : "mau nonton apa nihh.."} className="input-search" />
  
      </form>
    )
}

export default Navbar
