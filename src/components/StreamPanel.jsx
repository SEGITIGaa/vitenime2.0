import {StreamServices} from "../export";

const StreamPanel = ({eps, nonce, setIframe, Iframe}) => {
  return (
    <div className="col gap-5 md:w-2/3">
      <div className="col-to-row gap-5 justify-between">
        <h1 className="header">{eps.judul}</h1>
        <StreamServices episode={eps} nonce={nonce} setIframe={setIframe} />
      </div>
      <iframe
        allowFullScreen={true}
        src={Iframe}
        className="episode-frame"
      ></iframe>
    </div>
  );
};

export default StreamPanel;
