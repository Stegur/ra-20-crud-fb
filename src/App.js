import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Posts from './Components/Posts';
import NewPost from './Components/NewPost';
import Post from './Components/Post';

function App() {
  
  return (
    <Router>
      <div>
        <div className="container">
          <Route path="/" exact component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={Post} />
        </div>
      </div>
    </Router>
  );
}

export default App;
