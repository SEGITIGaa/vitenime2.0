import { useNavbar } from "../Functions/Func";
import { Recomendations } from "../export";
import { CircleX, Search, Sparkles, Loader2 } from "lucide-react";

const Navbar = ({ genres }) => {
  const {
    Submited,
    HandleFocus,
    Batal,
    recomendation,
    placeholder,
    request,
    animes,
    filteredAnime,
    setFocus,
    inputValue,
    setInputValue,
    searchResults,
    isSearching,
    isSearchMode,
  } = useNavbar();

  return (
    <div className="fixed top-0 left-0 right-0 py-3 bg-main/70 border-b border-third backdrop-blur-md z-30 px-4">
      <form
        className="navbar group lg:w-3/5 relative mx-auto"
        onSubmit={Submited}
      >
        <input
          type="search"
          name="search"
          id="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={HandleFocus}
          onBlur={() => setFocus("")}
          placeholder={placeholder}
          className="input-search peer"
          autoComplete="off"
        />
        <Sparkles className="absolute left-4 w-4 h-4 bg-third text-second/70 peer-focus:text-second peer-focus:rotate-45 transition-all duration-300" />
        {isSearching ? (
          <div className="absolute right-4 bg-third">
            <Loader2 className="w-5 h-5 text-second/70 animate-spin" />
          </div>
        ) : !recomendation ? (
          <div className="absolute right-4 bg-third cursor-pointer">
            <Search
              className="w-5 h-5 text-second/70 hover:text-indigo-500"
              strokeWidth={3}
            />
          </div>
        ) : (
          <div
            className="absolute right-4 bg-third cursor-pointer"
            onClick={Batal}
          >
            <CircleX
              className="w-5 h-5 text-second/70 hover:text-indigo-500"
              strokeWidth={3}
            />
          </div>
        )}
        <Recomendations
          rec={recomendation}
          animes={isSearchMode ? searchResults : animes}
          req={request}
          filtered={isSearchMode ? searchResults : filteredAnime}
          anime={inputValue}
          genres={genres}
          isSearchMode={isSearchMode}
        />
      </form>
    </div>
  );
};

export default Navbar;