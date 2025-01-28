import { useFetchAnimesByPage } from "../Functions/Fetch";
import { BackBtn, InfiniteScroll, Layout, LoadingCardSmall, Navbar, SmallCard } from "../export";

const Ongoing = ({genres}) => {
  const { animes, hasMore, getAnime, setRequest } = useFetchAnimesByPage('type=ongoing')

  return (
    <Layout>
      <Navbar ongoingAnimes={animes} setRequest={setRequest} getAnimes={getAnime} genres={genres}/>
      <h1 className="header mt-16">Ongoing</h1>
      <InfiniteScroll dataLength={animes.length} hasMore={hasMore} next={getAnime} loader={<LoadingCardSmall />} className="infinity-scroll">
        {animes.map((anime, index) => (
          <SmallCard anime={anime} key={index} />
        ))}
      </InfiniteScroll>
    </Layout>
  );
};

export default Ongoing;
