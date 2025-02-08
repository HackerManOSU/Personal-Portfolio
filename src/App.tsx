import './App.css'
import StarField from './components/Starfield/Space'
import AboutMe from './components/Me/AboutMe'
import Me from './components/Me/Me'
import Resume from './components/Resume/Resume'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>

<div className='bg-black w-full h-screen'>
      <StarField />
      <ProgressBar />
      <AboutMe />
      <Resume />
      <Me />
      <Footer />
    </div>
    </>
  )
}

export default App