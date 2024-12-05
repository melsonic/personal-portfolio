import "../../styles/local.css";
import { SiteGlobals } from "../data/globals";

function Landing(props: { siteGlobals: SiteGlobals}) {
  const {profilePicture, tagline, intro, resume} = props.siteGlobals;
  return (
    <div className="flex flex-col 2xl:flex-row-reverse lg:justify-between lg:items-center">
      <div className="pgradient-border rounded-full mx-auto">
        <img
          src={profilePicture}
          alt="profile picture"
          className="filter grayscale w-48 h-48 z-10 pgradient-border rounded-full border-4 p-2 md:w-72 md:h-72 md:p-4 2xl:w-96 2xl:h-96 2xl:p-8 hover:grayscale-0 hover:scale-105 transition-all"
        />
      </div>
      <div className="flex flex-col my-12 mb-20">
        <p className="text-3xl font-bold pgradient-text my-4 sm:text-center sm:text-4xl sm:my-12 md:text-6xl lg:text-left lg:text-5xl 2xl:text-6xl">
          Hello, I'm Melsonic,
        </p>
        <p className="text-2xl sm:text-center md:text-4xl lg:text-left">
          {tagline}
        </p>
        <p className="text-base my-4 sm:text-xl sm:my-8 2xl:w-172">
          {intro}
        </p>
        <button className="pbutton-gradient lg:ml-0">
          <a href={resume} target="_blank">Resume</a>
        </button>
      </div>
    </div>
  );
}

export default Landing;
