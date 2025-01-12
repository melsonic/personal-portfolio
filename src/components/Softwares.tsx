import { useEffect, useState } from "react";
import { getSoftwareList, Software } from "../data/softwares";
import { getImageUrl } from "../sanity/client";

function Softwares() {
  const [softwareList, setSoftwareList] = useState(new Array<Software>());
  useEffect(() => {
    getSoftwareList()
      .then((data) => setSoftwareList(data))
      .catch(console.error);
  }, []);
  return (
    <div className="pitembox" id="software">
      <h1 className="psection-title">Software</h1>
      {/* <div className="flex flex-wrap justify-center"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-16 2xl:gap-x-32">
        {softwareList.map((i: Software, idx: number) => {
          const { title, description, demoImage, livePreview, githubRepo } = i;
          let derivedDescription = description.length > 80
            ? description.slice(0, 80) + "..."
            : description;
          const softwareBoxAllignSelf: string = idx % 2 === 0
            ? "lg:justify-self-end"
            : "lg:justify-self-start";
          const softwareClasses: string =
            `flex flex-col pgradient-border w-88 my-4 p-8 box-border justify-self-center sm:w-144 md:h-fit lg:w-96 2xl:w-112 ${softwareBoxAllignSelf}`;
          return (
            <div className={softwareClasses} key={idx}>
              <img
                src={getImageUrl(demoImage).url()}
                alt="software image"
                className="box-content object-contain border-4 border-white"
              />
              <span className="text-2xl font-bold pgradient-text mt-8 mb-4">
                {title}
              </span>
              <span className="flex-1">
                <abbr title={description}>{derivedDescription}</abbr>
              </span>
              <span className="grid grid-cols-2">
                <button className="pbutton-gradient-mobile">
                  <a href={livePreview} target="_blank">Live Preview</a>
                </button>
                <button className="pbutton-normal-mobile">
                  <a href={githubRepo} target="_blank">Github Repo</a>
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Softwares;
