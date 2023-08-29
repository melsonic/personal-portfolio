import { interests as InterestsList, InterestsDataType } from "../data/interests.js";
import { useEffect, useState } from "react";

function Interest(props: { i: InterestsDataType }) {
  const { name, title, description, mastery } = props.i;
  const [pixel, setPixel] = useState(0);

  useEffect(() => {
    const pixelValue = Math.ceil((mastery / 100) * 288);
    setPixel(pixelValue);
  }, [mastery]);

  return (
    <div className="flex flex-col pb-8 2xl:flex-row md:mx-20">
      <div className="flex flex-col 2xl:mr-10">
        <span className="text-2xl font-bold mt-4 mb-4">{name.toUpperCase()}</span>
        <div className="h-4 w-72 bg-white rounded-full flex flex-col 2xl:mt-4">
          <div
            className="h-4 pgradient rounded-full"
            style={{width: pixel}}
          >
          </div>
        </div>
      </div>
      <div className="flex flex-col 2xl:ml-10">
        <span className="text-2xl mt-8 mb-4 2xl:mt-4">{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

function Interests() {
  return (
    <div className="pitembox" id="interests">
      <h1 className="psection-title">
        Things I Enjoy Doing
      </h1>
      {InterestsList.map((i: InterestsDataType) => <Interest i={i} />)}
    </div>
  );
}

export default Interests;
