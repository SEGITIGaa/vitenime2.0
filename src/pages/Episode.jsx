import {
  useState,
  BackBtn,
  Layout,
  LoadingPage,
  StreamServices,
  useParams,
  useEffect,
  Link,
  EpisodesOnEpisode,
} from "../export";

const Episode = () => {
  const { slug, name } = useParams();
  const [eps, setEps] = useState();
  const [Iframe, setIframe] = useState();
  const [nonce, setNonce] = useState();
  const [anime, setAnime] = useState([]);
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }
  const download = [
    "d360pmp4",
    "d480pmp4",
    "d720pmp4",
    "d1080pmp4",
    "d480pmkv",
    "d720pmkv",
    "d1080pmkv",
  ];

  const getEpisodeData = async () => {
    try {
      const [episodeResponse, animeResponse, nonceResponse] = await Promise.all(
        [
          fetch(`https://web-anime-psi.vercel.app/episode/${slug}`),
          fetch(`https://web-anime-psi.vercel.app/anime/${name}`),
          fetch("https://web-anime-psi.vercel.app/nonce"),
        ]
      );

      if (!episodeResponse.ok || !animeResponse.ok || !nonceResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const [episodeData, animeData, nonceData] = await Promise.all([
        episodeResponse.json(),
        animeResponse.json(),
        nonceResponse.json(),
      ]);

      setEps(episodeData);
      setIframe(episodeData.iframe);
      setAnime(animeData.episodes);
      setNonce(nonceData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getEpisodeData();
  }, [slug, name]);

  return eps ? (
    <Layout>
      <BackBtn />
      <div className="flex flex-col md:flex-row gap-5 mb-10">

        {/* IFRAME */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <h1 className="header md:w-2/3">{eps.judul}</h1>
            <StreamServices episode={eps} nonce={nonce} setIframe={setIframe} />
          </div>
          <iframe
            allowFullScreen={true}
            src={Iframe}
            className="episode-frame"
          ></iframe>
        </div>

        {/* EPISODE */}
        <div className="flex flex-col gap-3 md:w-1/3">
        <div className="flex items-center justify-between">
          <h1 className="header">Episodes</h1>
          <div className="cursor-pointer" onClick={handleShow}>tampilkan</div>
        </div>
          <EpisodesOnEpisode anime={anime} slug={slug} name={name} show={show} />
        </div>

      </div>

      {/* lINK DOWNLAOD */}
      <div className="flex flex-col md:w-2/3 gap-3">
        {download.map(
          (type, index) =>
            eps.download[type].length > 0 && (
              <div className="flex flex-col gap-4 border p-4 rounded-xl border-third" key={index}>
                <p className="text-second rounded-lg w-max font-semibold font-fira text-sm md:text-lg">
                  {`${type.split("p")[0].replace("d", " ")}p `}
                  <span className="text-[10px]">
                    {type.includes("mp4") ? "MP4" : "MKV"}
                  </span>
                </p>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {eps.download[type].map((dt, index) => (
                    <a
                      href={dt.href}
                      key={index}
                      className="flex items-center justify-between bg-third transition-all duration-300 w-full gap-3 rounded-lg md:py-3 p-2 md:px-4"
                    >
                      <p className="text-xs md:text-sm text-second font-semibold">
                        {dt.nama}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </Layout>
  ) : (
    <LoadingPage />
  );
};

export default Episode;
