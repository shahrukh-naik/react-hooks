import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [data, setData] = useState([]);

  const [pedro, setPedro] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  useEffect(() => {
    console.log('pedro');
  }, [pedro])

  return (
    <div>
      <button onClick={() => setPedro((prev) => !prev)}>Toggle</button>
      <h1>posts</h1>
      <ul>
        {data.map((item) =>
          <li key={item.id}>{item.title}</li>
        )}
      </ul>
    </div>

  )
}

export default UseEffect