import './App.css';
import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([])

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id != post.id))
  }

  return (
    <div className="App">
      
      {posts.length !== 0
        ? <PostList posts={posts} title={'Todo list'} remove={removePost} />
        : <p style={{ textAlign: 'center' }}>There is no posts!</p>
      }
      <PostForm create={createPost} posts={posts} />

    </div>

  );
}

export default App;
