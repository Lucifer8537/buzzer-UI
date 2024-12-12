import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Menu } from "./menu/Menu";
import { Admin } from "./admin/Admin";
import { Player } from "./Player/Player";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="admin" element={<Admin />} />
          <Route path="player" element={<Player />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
