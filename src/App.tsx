import { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/local.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Interests from "./components/Interests";
import Softwares from "./components/Softwares";
import Experiences from "./components/Experiences";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { getSiteGlobals, SiteGlobals } from "./data/globals";

function App() {
  const [siteGlobals, setSiteGlobals] = useState<SiteGlobals>();
  useEffect(() => {
    async function util() {
      let globals = await getSiteGlobals();
      if (globals !== undefined) setSiteGlobals(globals[0]);
    }
    util();
  }, []);
  if (siteGlobals !== undefined) {
    return (
      <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll bg-pbg text-white">
        <div className="max-w-xs mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl 2xl:max-w-screen-xl">
          <Nav siteGlobals={siteGlobals} />
          <Landing siteGlobals={siteGlobals} />
          <Interests />
          <Softwares />
          <Experiences />
          <Technologies />
          <Contact />
        </div>

        <Footer siteGlobals={siteGlobals} />
      </div>
    );
  } else {
    return (
      <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll bg-pbg text-white flex items-center justify-center">
        <div className="spinner">
          <div className="spinner1"></div>
        </div>
      </div>
    );
  }
}

export default App;
