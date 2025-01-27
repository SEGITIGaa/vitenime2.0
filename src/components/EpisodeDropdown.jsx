import { EpisodesOnEpisode } from "./Episodes"

const EpisodeDropdown = ({anime, slug, name, show, handleShow}) => {
  const className = `h-5 w-5 transition-all duration-300 ${show ? '-rotate-90' : 'rotate-90' }`
  return (
    <div className="col gap-3 md:w-1/3">
    <div className="flex items-center justify-between">
      <h1 className="header text-lg text-second/70 font-satoshi">Episode lainnya</h1>
      <div onClick={handleShow} className="arrow-btn text-xs md:hidden">
        lengkapnya
        <img src={"/arrow.svg"} alt="" className={className}/>
      </div>
    </div>
    <EpisodesOnEpisode anime={anime} slug={slug} name={name} show={show}/>
  </div>
  )
}

export default EpisodeDropdown
