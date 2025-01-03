import { useState, useEffect, useMemo } from "../export";

export function useFetchAnime(query) {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const getAnime = async () => {
      const response = await fetch(`https://test.infind.my.id/${query}`);
      const data = await response.json();
      setAnimeData(data);
    };

    getAnime()
  }, [query]);

  return animeData;
}

export function useFetchAnimeDetail(query) {
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const getAnime = async () => {
      const response = await fetch(`https://test.infind.my.id/anime/${query}`);
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
      if (reset) {
        setPage(1);
        setAnimes([]);
      }
  
      const response = await fetch(
        `https://test.infind.my.id/anime?page=${reset ? 1 : page}&${query}`
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

    return {filteredAnime, animes, hasMore, getAnime, setRequest, request }
}

export function useFetchEpisode(slug, name) {
  const [eps, setEps] = useState(null);
  const [Iframe, setIframe] = useState(null);
  const [nonce, setNonce] = useState(null);
  const [anime, setAnime] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const download = [
    "d360pmp4",
    "d480pmp4",
    "d720pmp4",
    "d1080pmp4",
    "d480pmkv",
    "d720pmkv",
    "d1080pmkv",
  ];


  const getEpisodeData = async () => {
    try {
      const [episodeResponse, animeResponse, nonceResponse] = await Promise.all([
        fetch(`https://test.infind.my.id/episode/${slug}`),
        fetch(`https://test.infind.my.id/anime/${name}`),
        fetch("https://test.infind.my.id/nonce"),
      ]);

      if (!episodeResponse.ok || !animeResponse.ok || !nonceResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const [episodeData, animeData, nonceData] = await Promise.all([
        episodeResponse.json(),
        animeResponse.json(),
        nonceResponse.json(),
      ]);

      setEps(episodeData);
      setIframe(episodeData.iframe);
      setAnime(animeData.episodes);
      setNonce(nonceData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getEpisodeData();
  }, [slug, name]);

  return {eps, Iframe, nonce, anime, handleShow, download, setIframe, show}
}

export function useAnimeDetail(anime) {
  const animeDetails = ['studio', 'rilis', 'status', 'skor', 'genre', 'durasi'].reduce((details, key) => {
    details[key] = anime?.[key]?.split(": ")[1] || "";
    return details;
  }, {});

  return animeDetails
}
