import { StreamServices } from "../export";

const StreamPanel = ({ eps, nonce, setIframe, Iframe }) => {
  return (
    <div className="col gap-5">
      <iframe
        allowFullScreen={true}
        src={Iframe}
        className="episode-frame"
        title={eps.judul}
      ></iframe>
      <div className="flex gap-3 flex-col lg:flex-row lg:items-center justify-between">
        <h1 className="header lg:w-3/4">{eps.judul}</h1>
        <StreamServices episode={eps} nonce={nonce} setIframe={setIframe} />
      </div>
    </div>
  );
};

export default StreamPanel;
