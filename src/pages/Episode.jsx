import { useFetchEpisode } from "../Functions/Fetch";
import {
  BackBtn,
  Layout,
  useParams,
  EpisodeLoading,
  StreamPanel,
  EpisodeDropdown,
  DownloadLinks,
} from "../export";

const Episode = () => {
  const { slug, name } = useParams();
  const { eps, Iframe, nonce, handleShow, download, anime, setIframe, show } =
    useFetchEpisode(slug, name);

  return (
    <Layout>
      <BackBtn />
      {eps ? (
        <>
          <StreamPanel
            eps={eps}
            nonce={nonce}
            Iframe={Iframe}
            setIframe={setIframe}
          />
          <div className="col-to-row gap-10 mb-10">
            <h1 className="header w-2/3">{eps.judul}</h1>
            <EpisodeDropdown
              anime={anime}
              name={name}
              show={show}
              handleShow={handleShow}
              slug={slug}
            />
          </div>
          <DownloadLinks download={download} eps={eps} />
        </>
      ) : (
        <EpisodeLoading />
      )}
    </Layout>
  );
};

export default Episode;
