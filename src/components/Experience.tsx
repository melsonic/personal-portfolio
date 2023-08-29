import { experiences, ExperienceType } from "../data/experiences"
import { FaDotCircle } from "react-icons/fa"

function Experience() {
  return (
    <div className="pitembox" id="experience" >
      <h1 className="psection-title">Experience</h1>
      <div className="flex flex-col items-center">
        {
          experiences.map((ex: ExperienceType) => {
            const {title, timeline, highlights, certificate} = ex
            return (
              <div className="flex flex-col pgradient-border my-4 min-h-136 w-88 mx-4 px-8 md:w-auto md:box-border md:mx-20">
                <span className="text-xl font-bold pgradient-text mt-2 md:text-3xl">{title.toUpperCase()}</span>
                <span className="text-xl pgradient-text font-bold my-2 mb-4 md:text-2xl">{timeline.toUpperCase()}</span>
                <ul className="mb-2 flex-1">
                  {highlights.map((h: string) => {
                    return (
                      <li className="my-2 lg:text-xl">
                        <FaDotCircle className="inline h-2 w-2" />
                        <span className="ml-2">{h}</span>
                      </li>
                    )
                  })}
                </ul>
                <button className="pbutton-gradient lg:text-xl">
                  <a href={certificate} target="_blank" >Certificate</a>
                </button>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Experience