
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout.js';
import IndexPage from './pages/IndexPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import { UserContextProvider } from './UserContext.js';
import CreatePost from './pages/CreatePost.js';

function App() {
  return (

    <UserContextProvider>
      <HashRouter>
<Routes>

<Route path = '/' element = {<Layout/>}>
<Route index element = {<IndexPage/>} />
<Route path='/login' element = {<LoginPage/>} />
<Route path='/register' element = {<RegisterPage/>} />
<Route path='create' element ={<CreatePost/>}/>


</Route>

</Routes>
</HashRouter>


    </UserContextProvider>

    
   
  );
}

export default App;