import { useRef } from 'react'
import { useState } from 'react'

const numbers = [400, 225, 11, 1500]
function App() {
  const [incrementing, setIncrementing] = useState(false)
  const refs = useRef({})

  for (let i = 0; i < Object.values(refs.current).length; i++) {
    let start = 0
    const element = refs.current[i];
    
    const duration = 500

    const interval = Math.floor(duration / numbers[i])

    const counter = setInterval(() => {
      let num = 1

      if(numbers[i] >= 1000) num = 10
      if(numbers[i] <= 500) num = 5
      if(numbers[i] < 100) num = 1


      start += num
      element.textContent = start

      if(start >= numbers[i]) clearInterval(counter)
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
      <div className='card'>
        <p ref={elem => refs.current[2] = elem} data={0}>0</p>
      </div>
      <div className='card'>
        <p ref={elem => refs.current[3] = elem} data={0}>0</p>
      </div>

      <div className='btn' ><button onClick={e => setIncrementing(true)}>set</button></div>
    </div>
  )
}

export default App
