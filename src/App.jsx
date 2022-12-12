import { useEffect, useRef } from 'react'
import { useState } from 'react'

const numbers = [100, 10]
function App() {
  const [incrementing, setIncrementing] = useState(false)
  const refs = useRef({})


  for (let i = 0; i < Object.values(refs.current).length; i++) {
    let start = 0
    const element = refs.current[i];

    const duration = 2000
    const interval = Math.floor(duration / numbers[i])

    const counter = setInterval(() => {
      start += 1
      element.innerText = start

      if(start === numbers[i]) clearInterval(counter)
    }, interval)
  };

  return (
    <div className="App">
      <div className='card'>
        <p ref={elem => refs.current[0] = elem} data={0}>0</p>
      </div>
      <div className='card'>
        <p ref={elem => refs.current[1] = elem} data={0}>0</p>
      </div>

      <div className='btn' ><button onClick={e => setIncrementing(true)}>set</button></div>
    </div>
  )
}

export default App
