import { useFetchAnimesByPage } from "../Functions/Fetch";
import { useParams, Layout, Navbar, InfiniteScroll, SmallCard, LoadingCardSmall } from "../export";

const AnimeByGenre = () => {
  const slug = useParams().slug;

  const {filteredAnime, animes, hasMore, getAnime, setRequest} = useFetchAnimesByPage(`genre=${slug}`)

  return (
    <Layout>
      <Navbar ongoingAnimes={animes} setRequest={setRequest} getAnimes={getAnime}/>
      <section className="flex flex-col items-start gap-8 pt-10">
        <h1 className="header">kumpulan anime {slug} buat kamu</h1>
        <InfiniteScroll dataLength={filteredAnime.length} hasMore={hasMore} next={getAnime} loader={<LoadingCardSmall />} className="infinity-scroll">
          {animes.map((anime, index) => (
            <SmallCard anime={anime} key={index} />
          ))}
        </InfiniteScroll>
      </section>
    </Layout>
  );
};

export default AnimeByGenre;
