import { useState, useEffect } from "../export";
import { useFetchAnimesByPage, useFetchAnimeSearch } from "./Fetch";

export function useNavbar() {
  const { filteredAnime, animes, getAnime, setRequest, request } =
    useFetchAnimesByPage("type=complete");
  const { searchResults, isSearching, searchAnime, clearSearch } = 
    useFetchAnimeSearch();
  
  const [recomendation, setRecomendation] = useState(false);
  const [onFocus, setFocus] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);
  
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
    setIsSearchMode(false);
    setInputValue("");
    setFocus("");
    clearSearch();
    setRequest("type=complete");
    getAnime(true, "type=complete");
  };

  const Submited = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    
    if (value === "") {
      setIsSearchMode(false);
      setRequest("type=complete");
      getAnime(true, "type=complete");
      clearSearch();
    } else {
      setIsSearchMode(true);
      searchAnime(value);
    }
  };

  // Debounce search saat user mengetik
  useEffect(() => {
    if (inputValue.trim() === "") {
      clearSearch();
      setIsSearchMode(false);
      return;
    }

    const timer = setTimeout(() => {
      searchAnime(inputValue.trim());
      setIsSearchMode(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, searchAnime, clearSearch]);

  return {
    Submited,
    HandleFocus,
    Batal,
    recomendation,
    placeholder,
    request,
    setRequest,
    animes,
    filteredAnime,
    onFocus,
    setFocus,
    inputValue,
    setInputValue,
    // Data search baru
    searchResults,
    isSearching,
    isSearchMode,
  };
}