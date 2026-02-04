import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import MainSection from "./components/main-section";
import Delivered from "./pages/Delivered";
import People from "./pages/People";
import AddPage from "./pages/AddPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import { createContext, useState } from "react";

export const LoginContext = createContext({ isLogin: false, setLogin: () => { } });

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
      <BrowserRouter>
        <LoginContext.Provider value={{ isLogin, setLogin }}>
          <Routes>

            <Route path="/login" element={<Login />} />

            {isLogin && <Route path="/" element={<MainSection></MainSection>}>
              <Route path="orders" element={<OrdersPage />} />
              <Route path="delivered" element={<Delivered />} />
              <Route path="people" element={<People />} />
              <Route path="add" element={<AddPage />} />
            </Route>}
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
  );
}

export default App;
