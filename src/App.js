import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './components/Root';
import Home from './pages/home/Home';
import Article from './pages/article/Article';

function App({state, dispatch}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index element={<Home cards={state.home} fetchArticles={dispatch} /> } />
          <Route path='article/:article' element={<Article state={state.article} dispatch={dispatch} /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
