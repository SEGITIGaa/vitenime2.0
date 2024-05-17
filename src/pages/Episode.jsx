import { useFetchEpisode } from "../Functions/Fetch";
import { BackBtn, Layout, useParams, EpisodeLoading, StreamPanel, EpisodeDropdown, DownloadLinks} from "../export";

const Episode = () => {
  const { slug, name } = useParams();
  const {eps, Iframe, nonce, handleShow, download, anime, setIframe, show} = useFetchEpisode(slug, name)

  return (
    <Layout>
      <BackBtn />
      {eps ? (
        <>
          <div className="col-to-row gap-5 mb-10">
           <StreamPanel eps={eps} nonce={nonce} Iframe={Iframe} setIframe={setIframe}/>
           <EpisodeDropdown anime={anime} name={name} show={show} handleShow={handleShow} slug={slug}/>
          </div>
          <DownloadLinks download={download} eps={eps}/>
        </>
      ) : (
       <EpisodeLoading/>
      )}
    </Layout>
  );
};

export default Episode;
