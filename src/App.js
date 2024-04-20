import { Home, Route, Router, Routes, useEffect, useState, Ongoing, Suspense, LoadingPage, Anime, AnimeByGenre, Episode } from "./export";
import "./App.css";


function App() {
  const [ongoingAnimeList, setOngoingAnimeList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [genres, setGenres] = useState([]);
  
  useEffect(() => {
    getOngoingAnimes();
    getAllAnimes()
    getGenres()
  }, []);
  
  // ONGOING ANIME
  const getOngoingAnimes = async () => {
    const response = await fetch(
      "https://web-anime-psi.vercel.app/anime?type=ongoing"
    );
    const data = await response.json();
    setOngoingAnimeList(data);
  };

  // ONGOING ANIME
  const getAllAnimes = async () => {
    const response = await fetch(
      "https://web-anime-psi.vercel.app/anime"
    );
    const data = await response.json();
    setAnimeList(data);
  };


  // GENRE ANIME
  const getGenres = async() => {
    const response = await fetch("https://web-anime-psi.vercel.app/genre")
    const data = await response.json();
    setGenres(data)
  }

  return (
    <Router>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="/" element={<Home ongoingAnimes={ongoingAnimeList} genres={genres} AllAnimes={animeList} />} />
          <Route path="/ongoing" element={<Ongoing animeList={ongoingAnimeList} getOngoingAnime={getOngoingAnimes} />} />
          <Route path="/anime/:slug" element={<Anime />} />
          <Route path="/anime/genre/:slug" element={<AnimeByGenre />} />
          <Route path="/anime/:name/:slug" element={<Episode />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
