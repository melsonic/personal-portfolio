import '../styles/App.css'
import '../styles/local.css'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Interests from './components/Interests'
import Software from './components/Software'
import Experience from './components/Experience'
import Technology from './components/Technology'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen w-screen overflow-x-hidden overflow-y-scroll bg-pbg text-white'>
      <div className='max-w-xs mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl 2xl:max-w-screen-xl'>

        <Nav />
        <Landing />
        <Interests />
        <Software />
        <Experience />
        <Technology />
        <Contact />

      </div>

      <Footer />

    </div>
  )
}

export default App
