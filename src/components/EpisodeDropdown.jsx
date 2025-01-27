import { EpisodesOnEpisode } from "./Episodes";
import { ChevronDown } from "lucide-react"

const EpisodeDropdown = ({ anime, slug, name, show, handleShow }) => {
  const className = `h-5 w-5 transition-all duration-300 ${
    show ? "rotate-180" : ""
  }`;
  return (
    <div className="rounded-lg overflow-hidden md:w-1/3 h-max order-first lg:order-last">
      <div className="col bg-third p-4 h-full max-h-72 eps overflow-y-scroll">
        <div className="flex items-center justify-between">
          <h1 className="header text-sm text-second/70 font-satoshi">
            Episode lainnya
          </h1>
          <div onClick={handleShow} className="arrow-btn text-xs md:hidden">
            lengkapnya
            <ChevronDown className={className}/>
          </div>
        </div>
        <EpisodesOnEpisode anime={anime} slug={slug} name={name} show={show} />
      </div>
    </div>
  );
};

export default EpisodeDropdown;
