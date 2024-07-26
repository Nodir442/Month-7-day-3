import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Category } from "./pages/category";
import { Layout } from "./layout/layout";
import { Product } from "./pages/product";
function App() {
  return (
    <>
      <div className="container mx-auto w-80 text-2xl">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Category />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
