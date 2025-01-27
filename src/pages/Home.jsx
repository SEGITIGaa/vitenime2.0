import { useFetchAnimesByPage } from "../Functions/Fetch";
import { Layout, Navbar,  OngoingAnimes, SmallCard, LoadingCardSmall, InfiniteScroll} from "../export";
import { baseUrl } from "../variables/Variables";

const Home = ({ ongoingAnimes, genres }) => {
  const { animes, hasMore, getAnime } = useFetchAnimesByPage('type=complete')

  console.log(baseUrl);
  
  return (
    <Layout >
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
