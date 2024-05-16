import { useFetchAnime } from "./Functions/Fetch";
import { Route, Router, Routes, lazy, Ongoing, Suspense, LoadingPage, Anime, AnimeByGenre, Episode, GenresPage } from "./export";


const Home = lazy(() => import('./pages/Home'))

function App() {
  const genres = useFetchAnime('genre');
  const ongoingAnimeList = useFetchAnime('anime?type=ongoing');

  return (
    <Router>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="/" element={<Home ongoingAnimes={ongoingAnimeList} genres={genres}/>} />
          <Route path="/ongoing" element={<Ongoing animeList={ongoingAnimeList}/>} />
          <Route path="/genres" element={<GenresPage genres={genres} />} />
          <Route path="/anime/:slug" element={<Anime />} />
          <Route path="/anime/genre/:slug" element={<AnimeByGenre />} />
          <Route path="/anime/:name/:slug" element={<Episode />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
