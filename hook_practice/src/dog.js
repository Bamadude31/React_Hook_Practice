import React, {useState, useEffect } from 'react';

const Dog = ({url}) => {
const [Dog, setDog ] = useState({url: ''})
    useEffect(() => {
      fetch(url)
          .then (res => res.json())
          .then(data => setDog(data))
    }, [url.messages])
    return (
      <div>
        <img src={Dog.message} alt= {Dog.id}/>
      </div>
    )
}

export default Dog;