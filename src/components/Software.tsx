// import '@/styles/local.css'
import { softwares as SoftwareList, SoftwareType } from "../data/softwares"

function Software() {
  return (
    <div className="pitembox" id="software">
      <h1 className="psection-title">Software</h1>
      {/* <div className="flex flex-wrap justify-center"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-4 lg:gap-x-8 2xl:gap-x-16">
        {
          SoftwareList.map((i: SoftwareType, idx: number) => {
            const { title, description, demoImage, livePreview, githubRepo } = i;
            const softwareBoxAllignSelf: string = (idx % 2 === 0 ? 'lg:justify-self-end' : 'lg:justify-self-start');
            const softwareClasses: string = `flex flex-col pgradient-border w-88 my-4 p-8 box-border justify-self-center sm:w-144 md:h-fit lg:w-96 lg:h-136 2xl:w-112 ${softwareBoxAllignSelf}`
            return (
              <div className={softwareClasses}>
                <img src={demoImage} alt="software image" className="box-content object-contain border-4 border-white" />
                <span className="text-2xl font-bold pgradient-text mt-8 mb-4">{title}</span>
                <span className="flex-1 sm:mb-20 lg:mb-0">{description}</span>
                <span className="grid grid-cols-2">
                  <button className="pbutton-gradient-mobile">
                    <a href={livePreview} target="_blank" >Live Preview</a>
                  </button>
                  <button className='pbutton-normal-mobile'>
                    <a href={githubRepo} target="_blank" >Github Repo</a>
                  </button>
                </span>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default Software
