import { useState } from "../export";
import { useFetchAnimesByPage } from "./Fetch";

export function useNavbar() {
  const { filteredAnime, animes, allAnimeList, getAnime, setRequest, request } =
    useFetchAnimesByPage("type=complete");
  const [recomendation, setRecomendation] = useState(false);
  const [onFocus, setFocus] = useState("");
  const [anime, setAnime] = useState("");
  const [inputValue, setInputValue] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const placeholder =
    onFocus !== "" ? `coba tonton "${onFocus}"` : "Cari di sini..";

  const HandleFocus = () => {
    if (animes.length > 0) {
      const Num = Math.floor(Math.random() * animes.length); 
      setFocus(animes[Num]?.judul || "Cari di sini.."); 
    } else {
      setFocus("Cari di sini..");
    }
    setRecomendation(true);
  };

  const Batal = () => {
    setRecomendation(false);
    setAnime("");
    setInputValue(""); 
    setFocus("");
    setSearchResults([]);
  };

  const Submited = (e) => {
    e.preventDefault();
    const value = inputValue.trim().toLowerCase();
    
    if (value === "") {
      setAnime("");
      setSearchResults([]);
      setRequest("type=complete");
      getAnime(true, "type=complete");
    } else {
      setAnime(value);
      // Filter dari allAnimeList berdasarkan nama
      const filtered = allAnimeList.filter((item) =>
        item.judul.toLowerCase().includes(value)
      );
      setSearchResults(filtered);
    }
  };

  return {
    Submited,
    HandleFocus,
    Batal,
    recomendation,
    anime,
    placeholder,
    request,
    setRequest,
    animes,
    filteredAnime,
    searchResults,
    onFocus,
    setFocus,
    inputValue,
    setInputValue
  };
}