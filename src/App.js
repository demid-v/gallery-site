import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate replace to="/gallery" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<Photo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
