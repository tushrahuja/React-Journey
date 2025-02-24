import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      setPosts(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>First Post Title</h1>
      <h2>useEffect 3rd exercise</h2>
      { posts.length > 0 ? <h2>{posts[0].title}</h2> : <p>Loading...</p>}
    </div>
  )
}

export default FetchDataEffect