import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import MakePage from 'pages/MakePage/MakePage';
import FestaPage from 'pages/FestaPage/FestaPage';
import Header from 'components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/make" element={<MakePage />}></Route>
        <Route path="/festa" element={<FestaPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
