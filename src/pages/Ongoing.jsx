import { BackBtn, InfiniteScroll, Layout, LoadingCardSmall, Navbar, SmallCard, useEffect, useState,
} from "../export";

const Ongoing = ({}) => {
  const [ongoing, setOngoing] = useState([]);
  const [request, setRequest] = useState("type=ongoing");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getOngoingAnime();
  }, []);

  // Ongoing ANIME
  const getOngoingAnime = async (reset = false, query = request) => {
    if (reset) {
      setPage(1);
      setOngoing([]);
    }

    const response = await fetch(
      `https://web-anime-psi.vercel.app/anime?page=${reset ? 1 : page}&${query}`
    );

    const data = await response.json();

    if (data.length > 0) {
      setHasMore(true);
      setOngoing((prevAnimes) => {
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

  return (
    <Layout>
      <Navbar ongoingAnimes={ongoing} setRequest={setRequest} getAnimes={getOngoingAnime}/>
      <BackBtn />
      <h1 className="header mt-5">Ongoing</h1>
      <InfiniteScroll
        dataLength={ongoing.length}
        hasMore={hasMore}
        next={getOngoingAnime}
        loader={<LoadingCardSmall />}
        className="grid grid-cols-2 justify-start items-start gap-5 gap-y-5 md:grid-cols-4"
      >
        {ongoing.map((anime, index) => (
          <SmallCard anime={anime} key={index} />
        ))}
      </InfiniteScroll>
    </Layout>
  );
};

export default Ongoing;
