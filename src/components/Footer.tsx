import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiteGlobals } from "../data/globals";

function Footer(props: { siteGlobals: SiteGlobals }) {
  return (
    <div className="flex justify-center bg-white/[0.01] py-20 pt-24 text-gray-300">
      <div className="flex flex-col items-center w-96 lg:w-172">
        <span className="text-lg text-center font-regular lg:text-xl">
          Email me with any kind of suggestions, collaborations or just want to
          talk
        </span>
        <span className="text-base pgradient-text mt-2 mb-4 lg:text-xl lg:mt-3">
          <a href={`mailto:${props.siteGlobals?.email}`}>
            {props.siteGlobals?.email}
          </a>
        </span>
        <span className="grid grid-cols-3 gap-x-2 text-3xl lg:my-1">
          <a href={props.siteGlobals?.twitter} target="_blank">
            <AiFillTwitterCircle className="pfooter_social_icons" />
          </a>
          <a href={props.siteGlobals?.linkedin} target="_blank">
            <TiSocialLinkedinCircular className="pfooter_social_icons" />
          </a>
          <a href={props.siteGlobals?.github} target="_blank">
            <AiFillGithub className="pfooter_social_icons" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
