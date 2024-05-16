import { useState, useEffect, useMemo } from "../export";

export function useFetchAnime(query) {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const getAnime = async () => {
      const response = await fetch(`https://web-anime-psi.vercel.app/${query}`);
      const data = await response.json();
      setAnimeData(data);
    };

    getAnime()
  }, [query]);

  return animeData;
}

export function useFetchAnimesByPage(req) {
    const [request, setRequest] = useState(req);
    const [animes, setAnimes] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      getAnime();
    }, []);
  
    const getAnime = async (reset, query = request) => {
        console.log(query);
      if (reset) {
        setPage(1);
        setAnimes([]);
      }
  
      const response = await fetch(
        `https://web-anime-psi.vercel.app/anime?page=${reset ? 1 : page}&${query}`
      );
  
      const data = await response.json();
  
      if (data.length > 0) {
        setHasMore(true);
        setAnimes((prevAnimes) => {
          const newData = reset
            ? data
            : data.filter(
                (anime) =>
                  !prevAnimes.some((prevAnime) => prevAnime.slug === anime.slug)
              );
          return [...prevAnimes, ...newData];
        });
        setPage((prevPage) => (reset ? 2 : prevPage + 1));
      } else {
        setHasMore(false);
      }
    };
  
    const filteredAnime = useMemo(() => {
      return animes.filter(
        (anime, index, self) =>
          self.findIndex((a) => a.slug === anime.slug) === index
      );
    }, [animes]);

    return {filteredAnime, animes, hasMore, getAnime, setRequest }
}