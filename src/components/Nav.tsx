import { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiteGlobals } from "../data/globals";

function Nav(props: { siteGlobals: SiteGlobals }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const changeMode = () => {
      if (window.innerWidth <= 768) setMobile(true);
      else {
        setMobile(false);
      }
    };

    changeMode();
    window.addEventListener("resize", changeMode);
  }, []);

  return (
    <div className="flex justify-between items-center my-10 md:my-16">
      <span className="text-xl font-medium lg:text-2xl hover:scale-110 transition-all">
        <a href="#">Portfolio</a>
      </span>
      <div>
        {/* hamburger menu icon */}
        <span className={mobile ? "" : "hidden"}>
          <AiOutlineMenu />
        </span>
        {/* menu items */}
        <span className={mobile ? "hidden" : "flex items-center"}>
          <span className="pnav_item">
            <a href="#interests">Interest</a>
          </span>
          <span className="pnav_item">
            <a href="#software">Software</a>
          </span>
          <span className="pnav_item">
            <a href="#experience">Experience</a>
          </span>
          <span className="pnav_item">
            <a href="#technology">Technology</a>
          </span>
          {/* icons */}
          <span className="flex mx-8">
            <a href={props.siteGlobals?.twitter} target="_blank">
              <AiFillTwitterCircle className="pnav_social_icons" />
            </a>
            <a href={props.siteGlobals?.linkedin} target="_blank">
              <TiSocialLinkedinCircular className="pnav_social_icons" />
            </a>
            <a href={props.siteGlobals?.github} target="_blank">
              <AiFillGithub className="pnav_social_icons" />
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Nav;
