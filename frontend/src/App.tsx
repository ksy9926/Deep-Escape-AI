import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import InfoPage from 'pages/InfoPage/InfoPage';
import AdminPage from 'pages/AdminPage/AdminPage';
import ThemePage from 'pages/ThemePage/ThemePage';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/info" element={<InfoPage />}></Route>
        <Route path="/theme" element={<ThemePage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
