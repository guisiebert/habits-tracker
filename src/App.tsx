import './styles/global.css';

// import { Habit } from "./components/Habit"
import logoImage from './assets/svglogo.svg'


export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>

        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
          <img src={logoImage} alt='habits' />

          <button 
            type='button'
            className='border border-violet-500 font-semibold rounded-lg pz-6 py-4'
            >
            New Habit
          </button>
        </div>

      </div>
    </div>
  )
}
