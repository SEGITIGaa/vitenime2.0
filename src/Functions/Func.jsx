import { useState } from "../export";
import { useFetchAnimesByPage } from "./Fetch";

export function useNavbar() {
    const {filteredAnime, animes,  getAnime, setRequest, request} = useFetchAnimesByPage('type=complete')
    const [recomendation, setRecomendation] = useState(false)
    const [onFocus, setFocus] = useState('')
    const [anime, setAnime] = useState('')
    const placeholder = onFocus !== "" ? `coba tonton "${onFocus}"` : "mau nonton apa nihh..";

    const HandleFocus = () => {
      const Num = Math.floor(Math.random() * animes.length ) + 1
      setFocus(animes.length === 0 ? "mau nonton apa nihh.." : animes[Num].judul )
      setRecomendation(true)
    }

    const Batal = () => {
      setRecomendation(false)
    }

    const Submited = (e) => {
      e.preventDefault()
      const value = e.target.querySelector("input").value
      setAnime(value)
      setRequest(value !== "" ? `search=${value}` : "type=complete")
      getAnime(true, `search=${value}`)
    }
    return {Submited, HandleFocus, Batal, recomendation, anime, placeholder, request, setRequest, animes, filteredAnime, onFocus, setFocus}
}