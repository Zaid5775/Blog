import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.js';
import IndexPage from './pages/IndexPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import { UserContextProvider } from './UserContext.js';
import CreatePost from './pages/CreatePost.js';
import PostPage from './pages/PostPage.js';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='/Blog' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='/Blog/login' element={<LoginPage />} />
            <Route path='/Blog/register' element={<RegisterPage />} />
            <Route path='/Blog/create' element={<CreatePost />} />
            <Route path='/Blog/post/:id' element={<PostPage />} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
