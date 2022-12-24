import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//BrowserRouter pega os items assim /Item
//HashRouter pega os intens assim #/Item

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Rautes serve, para, parar na primeira rota que encontra */}
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
