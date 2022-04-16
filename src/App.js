import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/gallery" />}></Route>
        <Route path="/gallery" element={<Gallery />}>
          Галлерея
        </Route>
        <Route path="/about" element={<About />}>
          Обо мне
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
