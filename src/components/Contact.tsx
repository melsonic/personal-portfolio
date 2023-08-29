function Contact() {
  return (
    <div className="pitembox" id="contact" >
      <h1 className="psection-title">Contact me for collaboration, suggestion</h1>
      <form action="#" className="flex flex-col items-center sm:mt-20">
        <div className="flex justify-between w-88 md:w-96">
          <input className="pinput w-32 md:w-36 box-content px-4" placeholder="name" />
          <input className="pinput w-36 md:w-40 box-content px-4" placeholder="email" />
        </div>
        <input className="pinput w-88 md:w-96" placeholder="subject matter" />
        <textarea className="pinput w-88 md:w-96 overflow-y-hidden" placeholder="please share your view" />

        <div className="w-full flex justify-center my-4">
        <button className="pbutton-gradient mx-auto sm:mt-10">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Contact