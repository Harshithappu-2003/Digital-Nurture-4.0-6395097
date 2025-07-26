

import React from 'react';
import Posts from './Posts'; 
import './App.css'; 


function App() {
  return (
    <div className="App" style={{ 
      textAlign: 'center', 
      fontFamily: 'Inter, Arial, sans-serif', 
      minHeight: '100vh', 
      backgroundColor: '#f0f2f5', 
      color: '#333' 
    }}>
      <header className="App-header" style={{ 
        backgroundColor: '#2c3e50', // Darker header for contrast
        padding: '25px 20px', 
        color: 'white', 
        marginBottom: '30px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        borderRadius: '0 0 10px 10px' 
      }}>
        <h1 style={{ margin: 0, fontSize: '3em', fontWeight: 'bold' }}>My Blog Application</h1>
        <p style={{ fontSize: '1.2em', opacity: 0.9 }}>Discover interesting articles</p>
      </header>
      <main style={{ padding: '20px' }}>
        {}
        <Posts /> 
      </main>
      <footer style={{ 
        marginTop: '50px', 
        padding: '20px', 
        backgroundColor: '#2c3e50', 
        color: 'white',
        borderRadius: '10px 10px 0 0', 
        boxShadow: '0 -2px 8px rgba(0,0,0,0.2)'
      }}>
        <p>&copy; 2025 My Blog App. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
