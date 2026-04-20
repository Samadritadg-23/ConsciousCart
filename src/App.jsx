import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import { useAuth } from "./context/AuthContext";
import AllProducts from "./pages/AllProducts";
import ProductPage from "./pages/ProductPage";
import SavedPage from "./pages/SavedPage";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Category Page (IMPORTANT) */}
        <Route
          path="/category/:category"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <AllProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/saved"
          element={
            <ProtectedRoute>
              <SavedPage />
            </ProtectedRoute>
          }
        />

        {/* Optional: fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;