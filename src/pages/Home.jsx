import { Layout, useMemo, Navbar, OngoingAnimes, Genres, SmallCard, useState, useEffect, LoadingCardSmall, InfiniteScroll} from "../export";

const Home = ({ ongoingAnimes, genres }) => {
  const [completedAnimes, setCompletedAnimes] = useState([]);
  const [request, setRequest] = useState("type=complete");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCompletedAnimes();
  }, []);

  const getCompletedAnimes = async (reset = false, query = request) => {
    if (reset) {
      setPage(1);
      setCompletedAnimes([]);
    }

    const response = await fetch(
      `https://web-anime-psi.vercel.app/anime?page=${reset ? 1 : page}&${query}`
    );

    const data = await response.json();

    if (data.length > 0) {
      setHasMore(true);
      setCompletedAnimes((prevAnimes) => {
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

  const filteredCompletedAnimes = useMemo(() => {
    return completedAnimes.filter(
      (anime, index, self) =>
        self.findIndex((a) => a.slug === anime.slug) === index
    );
  }, [completedAnimes]);

  return (
    <Layout>
      <Navbar ongoingAnimes={completedAnimes} setRequest={setRequest} getAnimes={getCompletedAnimes}/>
      <OngoingAnimes ongoingAnimes={ongoingAnimes} />

      <Genres genres={genres} />

      <section className="col-start gap-5 pt-5">
        <h1 className="header">Completed</h1>

        <InfiniteScroll dataLength={filteredCompletedAnimes.length} hasMore={hasMore} next={getCompletedAnimes} loader={<LoadingCardSmall />} className="infinity-scroll">
          {completedAnimes.map((anime, index) => (
            <SmallCard anime={anime} key={index} />
          ))}
        </InfiniteScroll>
      </section>
    </Layout>
  );
};

export default Home;
