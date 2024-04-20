import { useState, useEffect, useParams, Layout, BackBtn, LoadingPage, Episodes, AnimeDetail} from "../export";

const Anime = () => {
  const slug = useParams().slug;
  const [anime, setAnime] = useState();

  useEffect(() => {
    getAnime();
  }, []);

  const getAnime = async () => {
    const res = await fetch(`https://web-anime-psi.vercel.app/anime/${slug}`);
    const data = await res.json();
    setAnime(data);
  };

  return anime ? (
    <Layout>

      <BackBtn className={"arrow-btn bg-main px-4 md:px-0"} />

      <div className={`anime-bg`} style={{ backgroundImage: `url(${anime.gambar})` }}>
        <div className="bg-blured">
          <img src={anime.gambar} alt={anime.judul} className="w-2/5 rounded-sm"/>
        </div>
      </div>

      <div className="anime-container">
        {/* ANIME-INFO */}
       <AnimeDetail anime={anime}/>

        {/* ANIME EPISODES */}
        <Episodes episodes={anime.episodes} slug={slug}/>
      </div>

    </Layout>
  ) : (
    <LoadingPage />
  );
};

export default Anime;
