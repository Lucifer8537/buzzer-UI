import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Menu } from "./menu/Menu";
import { Admin } from "./admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="admin" element={<Admin />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
