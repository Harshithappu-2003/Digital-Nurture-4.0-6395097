

import React from 'react';
import Post from './Post'; 

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],         
      error: null,        
      hasError: false     
    };
  }


  componentDidMount() {
    this.loadPosts();
  }


  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

     
      if (!response.ok) {
        
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); 
      

      const fetchedPosts = data.map(item => new Post(item.id, item.title, item.body));

    
      this.setState({ posts: fetchedPosts, error: null }); 

    } catch (error) {
      
      console.error("Error fetching posts:", error);
      
      this.setState({ error: error.message, hasError: true }); 
    }
  }

  static getDerivedStateFromError(error) {

    return { hasError: true, error: error.message };
  }


  componentDidCatch(error, info) {
 
    console.error("Component did catch an error in rendering:", error, info);

    alert("A critical error occurred in the application. Please try again later.");
  }


  render() {
    const { posts, error, hasError } = this.state;



    if (hasError) {
      return (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>
          <h1>Something went wrong.</h1>
          <p>Please check the console for more details.</p>
          {error && <p>Error message: {error}</p>}
        </div>
      );
    }


    if (error) {
      return (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>
          <h1>Error fetching data:</h1>
          <p>{error}</p>
          <p>Please check your internet connection or the API endpoint.</p>
        </div>
      );
    }


    if (posts.length === 0) {
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Loading posts...</h1>
        </div>
      );
    }


    return (
      <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 15px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>All Blog Posts</h1>
        {posts.map(post => (

          <div key={post.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginBottom: '10px' }}>{post.title}</h2>
            <p style={{ color: '#555', lineHeight: '1.6' }}>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
