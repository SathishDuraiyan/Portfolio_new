import React from 'react'
import { Button } from './Components/Button'

const App = () => {
  return (
    <div className="dark:bg-black h-screen w-full">
      <div className='justify-between flex flex-row px-10 py-5'>
      <p className='text-white font-medium text-xl text-center'>Sathish Duraiyan</p>
      <nav className='flex flex-row items-center'>
        <li><a className='px-2 text-white hover:border-b-2 hover:border-white hover:rounded-md py-1'>Home</a></li>
        <li><a className='px-2 text-white hover:border-b-2 hover:border-white hover:rounded-md py-1'>About</a></li>
        <li><a className='px-2 text-white hover:border-b-2 hover:border-white hover:rounded-md py-1'>Project</a></li>
        <li><a className='px-2 text-white hover:border-b-2 hover:border-white hover:rounded-md py-1'>Contact me</a></li>
      </nav>
      <Button className='dark:bg-slate-600 dark:text-zinc-200 hover:bg-slate-200 hover:text-zinc-800 transition-all duration-300 ease-in-out'>Download Resume</Button>
      </div>
      
    </div>
  )
}
export default App