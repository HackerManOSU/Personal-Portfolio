import './App.css'
import StarField from './components/Starfield/Space'
import Resume from './components/Resume/Resume'
import ProgressBar from './components/ProgressBar/ProgressBar'

function App() {

  return (
    <>
    <div className='bg-white w-full h-screen'>
      <StarField />
      <ProgressBar />
      <Resume />
    </div>
    </>
  )
}

export default App
