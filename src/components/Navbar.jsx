import { useNavbar } from "../Functions/Func";
import { BackBtn, Genres, Recomendations } from "../export";
import { CircleX, Search, Sparkles } from "lucide-react";

const Navbar = ({ genres }) => {
  const {
    Submited,
    HandleFocus,
    Batal,
    recomendation,
    anime,
    placeholder,
    request,
    animes,
    filteredAnime,
    setFocus,
    inputValue,
    setInputValue,
  } = useNavbar();

  return (
    <form
      className="navbar group lg:w-3/5 relative mx-auto"
      onSubmit={Submited}
    >
      <input
        type="search"
        name="search"
        id="search"
        value={inputValue} // Hubungkan dengan state inputValue
        onChange={(e) => setInputValue(e.target.value)} // Sinkronkan perubahan input dengan state
        onFocus={HandleFocus}
        onBlur={() => setFocus("")}
        placeholder={placeholder}
        className="input-search peer"
        autoComplete="off"
      />
      <Sparkles className="absolute left-4 w-4 h-4 bg-third text-second/70 peer-focus:text-second peer-focus:rotate-45 transition-all duration-300" />
      {!recomendation ? (
        <div className="absolute right-4 bg-third">
          <Search
            className="w-5 h-5 text-second/70 hover:text-indigo-500"
            strokeWidth={3}
          />
        </div>
      ) : (
        <div className="absolute right-4 bg-third" onClick={Batal}>
          <CircleX
            className="w-5 h-5 text-second/70 hover:text-indigo-500"
            strokeWidth={3}
          />
        </div>
      )}
      <Recomendations
        rec={recomendation}
        animes={animes}
        req={request}
        filtered={filteredAnime}
        anime={anime}
        genres={genres}
      />
    </form>
  );
};

export default Navbar;
