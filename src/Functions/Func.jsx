import { useState } from "../export";
import { useFetchAnimesByPage } from "./Fetch";

export function useNavbar() {
  const { filteredAnime, animes, getAnime, setRequest, request } =
    useFetchAnimesByPage("type=complete");
  const [recomendation, setRecomendation] = useState(false);
  const [onFocus, setFocus] = useState("");
  const [anime, setAnime] = useState("");
  const [inputValue, setInputValue] = useState(""); 
  const placeholder =
    onFocus !== "" ? `coba tonton "${onFocus}"` : "Cari di sini..";

  const HandleFocus = () => {
    if (animes.length > 0) {
      const Num = Math.floor(Math.random() * animes.length); // Pastikan indeks valid
      setFocus(animes[Num]?.judul || "Cari di sini.."); // Gunakan optional chaining
    } else {
      setFocus("Cari di sini..");
    }
    setRecomendation(true);
  };

  const Batal = () => {
    setRecomendation(false);
    setAnime("");
    setInputValue(""); // Reset nilai input
    setFocus(""); // Reset nilai fokus
  };

  const Submited = (e) => {
    e.preventDefault();
    const value = inputValue; // Ambil nilai dari state
    setAnime(value);
    setRequest(value === "" ? "type=complete" : `search=${value}`);
    getAnime(true, `search=${value}`);
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
    onFocus,
    setFocus,
    inputValue,
    setInputValue, // Ekspor kontrol input untuk dihubungkan dengan elemen input
  };
}
