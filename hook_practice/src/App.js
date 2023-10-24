import React, {useState} from 'react';
import Dog from './dog.js' ;

const App = () => {
  const [url, setUrl] = useState(`https://dog.ceo/api/breeds/image/random`);
  const randomDog = () => {
    setUrl(`https://dog.ceo/api/breeds/image/random`)
  }

  return (
    <div>
      <Dog url={url} />
      <button onClick= {randomDog}> Click for random dog</button>
    </div>
  )
}

export default App;