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
  
        <input type="search" name="" id="" onFocus={HandleFocus} onBlur={() => setFocus("")} placeholder={onFocus !== "" ? `"${onFocus}"` : "what’s looking for.."} className="input-search" />
  
      </form>
    )
}

export default Navbar
