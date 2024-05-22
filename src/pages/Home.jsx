import { useFetchAnimesByPage } from "../Functions/Fetch";
import { Layout, Navbar,  OngoingAnimes, SmallCard, LoadingCardSmall, InfiniteScroll} from "../export";

const Home = ({ ongoingAnimes, genres }) => {
  // const {filteredAnime, animes, hasMore, getAnime, setRequest, request} = useFetchAnimesByPage('type=complete')
  const { animes, hasMore, getAnime, setRequest } = useFetchAnimesByPage('type=ongoing')

  return (
    <Layout>
      <Navbar getAnimes={getAnime} genres={genres}/>

      {/* ONGOING LIST */}
      <OngoingAnimes ongoingAnimes={ongoingAnimes} />

      {/* COMPLETED LIST */}
      <section className="col-start pt-5">
        <h1 className="header">Completed</h1>

        <InfiniteScroll dataLength={animes.length} hasMore={hasMore} next={getAnime} loader={<LoadingCardSmall />} className="infinity-scroll">
          {animes.map((anime, index) => (
            <SmallCard anime={anime} key={index} />
          ))}
        </InfiniteScroll>
      </section>

    </Layout>
  );
};

export default Home;
