import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./views/Blog";

import ListadoPeliculas from "./views/ListadoPeliculas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route exact path="/" element={<ListadoPeliculas />} />
      </Routes>
      {/* Switch fue reemplazado por Routes */}
    </BrowserRouter>
  );
}

export default App;
