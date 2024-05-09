import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './components/Root';
import Home from './pages/home/Home';
import Article from './pages/article/Article';

function App({state, dispatch}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index element={<Home /> } />
          <Route path=':article' element={<Article /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
