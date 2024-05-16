import { useFetchAnimesByPage } from "../Functions/Fetch";
import { Layout, Navbar,  OngoingAnimes, Genres, SmallCard, LoadingCardSmall, InfiniteScroll} from "../export";

const Home = ({ ongoingAnimes, genres }) => {

  const {filteredAnime, animes, hasMore, getAnime, setRequest} = useFetchAnimesByPage('type=complete')

  return (
    <Layout>
      <Navbar setRequest={setRequest} getAnimes={getAnime}/>
      <OngoingAnimes ongoingAnimes={ongoingAnimes} />

      <Genres genres={genres} />

      <section className="col-start gap-5 pt-5">
        <h1 className="header">Completed</h1>

        <InfiniteScroll dataLength={filteredAnime.length} hasMore={hasMore} next={getAnime} loader={<LoadingCardSmall />} className="infinity-scroll">
          {animes.map((anime, index) => (
            <SmallCard anime={anime} key={index} />
          ))}
        </InfiniteScroll>
      </section>
    </Layout>
  );
};

export default Home;
