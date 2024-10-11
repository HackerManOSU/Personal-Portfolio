import './App.css'
import StarField from './components/Starfield/Space'
import Me from './components/Me/Me'
import Resume from './components/Resume/Resume'
import ProgressBar from './components/ProgressBar/ProgressBar'

function App() {

  return (
    <>

<div className='bg-black w-full h-screen'>
      <StarField />
      <ProgressBar />
      <Me />
      <Resume />
    </div>
    </>
  )
}

export default App