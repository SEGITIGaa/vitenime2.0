import {
  useEffect,
  useParams,
  useState,
  useMemo,
  Layout,
  Navbar,
  Genres,
  InfiniteScroll,
  SmallCard,
  BackBtn,
  LoadingCardSmall,
} from "../export";

const AnimeByGenre = () => {
  const slug = useParams().slug;

  const [AnimesByGenre, setAnimesByGenre] = useState([]);
  const [request, setRequest] = useState(`genre=${slug}`);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAnimesByGenre();
  }, []);

  const getAnimesByGenre = async (reset = false, query = request) => {
    if (reset) {
      setPage(1);
      setAnimesByGenre([]);
    }

    const response = await fetch(
      `https://web-anime-psi.vercel.app/anime?page=${reset ? 1 : page}&${query}`
    );

    const data = await response.json();

    if (data.length > 0) {
      setHasMore(true);
      setAnimesByGenre((prevAnimes) => {
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

  const filteredAnimesByGenre = useMemo(() => {
    return AnimesByGenre.filter(
      (anime, index, self) =>
        self.findIndex((a) => a.slug === anime.slug) === index
    );
  }, [AnimesByGenre]);

  return (
    <Layout>
      <Navbar
        ongoingAnimes={AnimesByGenre}
        setRequest={setRequest}
        getAnimes={getAnimesByGenre}
      />
      <BackBtn />
      <section className="flex flex-col items-start gap-5 pt-10">
        <h1 className="h1">{slug} anime collection</h1>

        <InfiniteScroll
          dataLength={filteredAnimesByGenre.length}
          hasMore={hasMore}
          next={getAnimesByGenre}
          loader={<LoadingCardSmall />}
          className="grid grid-cols-2 justify-start items-start gap-5 gap-y-5 md:grid-cols-4"
        >
          {AnimesByGenre.map((anime, index) => (
            <SmallCard anime={anime} key={index} />
          ))}
        </InfiniteScroll>
      </section>
    </Layout>
  );
};

export default AnimeByGenre;
