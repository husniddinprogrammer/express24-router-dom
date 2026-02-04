import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import MainSection from "./components/main-section";
import Delivered from "./pages/Delivered";
import People from "./pages/People";
import AddPage from "./pages/AddPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";


function App() {
  const isLogin = useSelector(state => state.login.isLogin);

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />

            {isLogin && <Route path="/" element={<MainSection />}>
              <Route path="orders" element={<OrdersPage />} />
              <Route path="delivered" element={<Delivered />} />
              <Route path="people" element={<People />} />
              <Route path="add" element={<AddPage />} />
            </Route>}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
