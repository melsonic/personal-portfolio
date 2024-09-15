import { useEffect, useState } from "react";
import { getTechnologyList, Technology } from "../data/technology";

function Technologies() {
  const [technologyList, setTechnologyList] = useState(new Array<Technology>());
  useEffect(() => {
    getTechnologyList()
      .then((data) => setTechnologyList(data))
      .catch(console.error);
    console.log(technologyList);
  }, []);
  return (
    <div className="py-8 pitembox" id="technology">
      <h1 className="psection-title">Technologies I'm Familiar With</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {technologyList.map((tech: Technology, idx: number) => {
          return (
            <div
              key={idx}
              className="flex items-center ml-8 md:ml-16 xl:ml-28 2xl:ml-40"
            >
              <span className="h-2 w-2 rounded-full pgradient lg:h-4 lg:w-4">
              </span>
              <span className="ml-2 text-lg lg:ml-4 lg:text-xl 2xl:text-2xl">
                {tech?.skill}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
