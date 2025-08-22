import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [counter, setCounter] = useState(0);

  const handleCounter = (e) => {
    console.log("e", e)
    const newNUm= counter + 1;
    setCounter(newNUm);
  };

  console.log(counter)

  return (
    <Card>
      <h1>Hello there, this is Ujjal B. Allen</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis optio facere asperiores nemo numquam. Reprehenderit repellat facere quam provident aliquam culpa perspiciatis quo quibusdam atque ex suscipit debitis nisi quae temporibus blanditiis ab, officiis ratione laudantium? Labore earum quidem expedita corrupti nam explicabo voluptas. Vitae nesciunt ipsam non sequi voluptas?</p>
      <button onClick={(e) => handleCounter(e)}>See More</button> <br />
      {
        counter && <span>{counter}</span>
      }
    </Card>
  )
}

export default App
