import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import AdminPage from 'pages/AdminPage/AdminPage';
import ThemePage from 'pages/ThemePage/ThemePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/theme" element={<ThemePage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
