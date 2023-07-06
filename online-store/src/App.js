import {
  Routes,
  Route,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { NavBar } from "./components/navbar";

function App() {
  const navigate = useNavigate();
  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`);
  };

  return (
    <>
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
