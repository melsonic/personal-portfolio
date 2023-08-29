import { TechnologyList } from "../data/technology"

function Technology() {
  return (
    <div className="py-8 pitembox" id="technology" >
      <h1 className="psection-title">Technologies I'm Familiar With</h1>
      <div className="grid grid-cols-3 gap-4">
        {
          TechnologyList.map(tech => {
            return (
              <div className="flex items-center sm:ml-12 md:ml-20 xl:ml-28 2xl:ml-40">
                <span className="h-2 w-2 rounded-full pgradient lg:h-4 lg:w-4"></span>
                <span className="ml-2 text-lg lg:ml-4 lg:text-xl 2xl:text-2xl">{tech}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Technology