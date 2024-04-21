import { useState, useEffect, useParams, Layout, BackBtn, Episodes, AnimeDetail, AnimeLoading,
} from "../export";

const Anime = () => {
  const { slug } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const getAnime = async () => {
      try {
        const res = await fetch(
          `https://web-anime-psi.vercel.app/anime/${slug}`
        );
        const data = await res.json();
        setAnime(data);
      } catch (error) {
        alert("Ops, ada yg salah, ", error);
      }
    };

    getAnime();
  }, [slug]);

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
