import { useRef } from 'react'
import { useState } from 'react'

const numbers = [95, 3452, 181, 40100]
function App() {
  const [incrementing, setIncrementing] = useState(false)
  const refs = useRef({})

  for (let i = 0; i < Object.values(refs.current).length; i++) {
    let start = 0
    const element = refs.current[i];

    const duration = 1000

    const interval = duration / numbers[i]

    const counter = setInterval(() => {
      let num = Math.ceil(numbers[i] / (duration / numbers.length))
      if (+element.textContent + num > numbers[i]) {
        num = numbers[i] - +element.textContent
      }

      start += num
      element.textContent = start

      if (start >= numbers[i]) clearInterval(counter)
    }, interval)
  };

  const handleToggleIncrementing = () => {
    setIncrementing(!incrementing)
  }

  return (
    <div className="App">
      {numbers.map((num, idx) => (
        <div className='card'>
          <p ref={elem => refs.current[idx] = elem} data={0}>0</p>
        </div>
      ))}

      <div className='btn' ><button onClick={handleToggleIncrementing}>set</button></div>
    </div>
  )
}

export default App
