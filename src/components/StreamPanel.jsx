import { StreamServices } from "../export";

const StreamPanel = ({ eps, nonce, setIframe, Iframe }) => {
  return (
    <div className="col gap-5">
      <iframe
        allowFullScreen={true}
        src={Iframe}
        className="episode-frame"
      ></iframe>
        <StreamServices episode={eps} nonce={nonce} setIframe={setIframe} />
    </div>
  );
};

export default StreamPanel;
