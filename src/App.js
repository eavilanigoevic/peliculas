import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";

import ListadoPeliculas from "./ListadoPeliculas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListadoPeliculas />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* Switch fue reemplazado por Routes */}
    </BrowserRouter>
  );
}

export default App;
