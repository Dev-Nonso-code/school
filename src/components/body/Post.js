/* eslint-disable no-undef */
import React,{useState, useEffect} from 'react'


const Post = () => {
  const [val, setValues] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('value'));
    if (storedItems) {
     setValues(storedItems);
     console.log(storedItems)
    }
  }, []);
  return (
    <>
   <h2>Items from Local Storage</h2>
      <ul>
        {val.map((item) => (
          <>
          <li key={values.id}>{item.name}</li>
          <h3>{item.object}</h3>
          <h3>{item.email}</h3>
          <h3>{item.body}</h3>
          </>
        ))}
      </ul>
    </>
  )
}

export default Post