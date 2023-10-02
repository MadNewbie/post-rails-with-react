import { useState } from 'react'
import './App.css'
import PostsLists from './features/posts/PostsList';

function App() {
  return (
    <>
      <div className='app'>
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in fe/src/App.jsx</p>
        <PostsLists/>
      </div>
    </>
  )
}

export default App
