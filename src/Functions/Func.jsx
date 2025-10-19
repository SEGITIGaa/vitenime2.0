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
  const [isSearching, setIsSearching] = useState(false);
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
    setIsSearching(false);
  };

  const Submited = async (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    
    if (value === "") {
      setAnime("");
      setSearchResults([]);
      setRequest("type=complete");
      getAnime(true, "type=complete");
      setIsSearching(false);
    } else {
      setAnime(value);
      setIsSearching(true);
      
      try {
        // Gunakan endpoint search API
        const response = await fetch(
          `https://animenetwork.vercel.app/api/anime?search=${encodeURIComponent(value)}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Origin": "https://animenetwork.vercel.app",
              "User-Agent": "Browser",
            }
          }
        );
        
        const data = await response.json();
        setSearchResults(data);
        setIsSearching(false);
      } catch (error) {
        console.error("Error searching anime:", error);
        setSearchResults([]);
        setIsSearching(false);
      }
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
    isSearching,
    onFocus,
    setFocus,
    inputValue,
    setInputValue,
    allAnimeList
  };
}