import { useFetchAnimeDetail } from "../Functions/Fetch";
import {
  useParams,
  Layout,
  BackBtn,
  Episodes,
  AnimeDetail,
  AnimeLoading,
} from "../export";

const Anime = () => {
  const { slug } = useParams();
  const anime = useFetchAnimeDetail(slug);

  return (
    <Layout>
      <BackBtn className={"arrow-btn bg-main px-4 md:px-0"} />

      {anime ? (
        <>
          <AnimeDetail anime={anime} />
          <Episodes episodes={anime.episodes} slug={slug} />
        </>
      ) : (
        <AnimeLoading />
      )}
    </Layout>
  );
};

export default Anime;
