
import './App.css';
import Post from './Post.js'
import Header from './Header.js'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <main>
      <Header/>
      <Post/>
    </main>
  );
}

export default App;
