import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import MainSection from "./components/main-section";
import Delivered from "./pages/Delivered";
import People from "./pages/People";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSection></MainSection>}>
          <Route path="orders" element={<OrdersPage />} />
          <Route path="delivered" element={<Delivered />} />
          <Route path="people" element={<People />} />
          <Route path="add" element={<AddPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
