import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/PostPage';
import Posts from './pages/PostsPage';
import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts helloFrom="Hello from" />} />
        <Route path="/posts" element={<Posts helloFrom="Hello from" />} />
        <Route path="/post/:id" element={<Post helloFrom="Hello from" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
