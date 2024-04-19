import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);


    const plus = () => {
        setCount(count+1);
        console.log(count);
    }
    const minus = () => {
        setCount(count-1);
        console.log(count);
    }

  return (
    <div style={{margin:15}}>
      <h2>{count}</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  )
}