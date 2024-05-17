import { useFetchAnimeDetail } from "../Functions/Fetch";
import { useParams, Layout, BackBtn, Episodes, AnimeDetail, AnimeLoading } from "../export";

const Anime = () => {
  const { slug } = useParams();
  const anime = useFetchAnimeDetail(slug);
  console.log(anime);

  return (
    <Layout>
      <BackBtn className={"arrow-btn bg-main px-4 md:px-0"} />

      {anime ? (
        <>
          <AnimeDetail anime={anime} /> {/* ANIME-INFO */}
          <Episodes episodes={anime.episodes} slug={slug} /> {/* ANIME EPISODES */}
        </>
      ) : (
        <AnimeLoading />
      )}
    </Layout>
  );
};

export default Anime;
