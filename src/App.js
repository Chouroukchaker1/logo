import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Blog  from './components/Blog';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div classNmae="App"> 
    <BrowserRouter>
      <Routes>
        <Route path='/Blogs' element={<Blog/>} />
        <Route path='/Blog/create' element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
   
}

export default App;
