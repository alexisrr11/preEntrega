import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Dashboard } from "./components/adminComponents/dashboard/Dashboard";
import { ProtectedRoute } from "./proctectedRoute/ProtectedRoute";
import { Login } from "./components/Login/Login";
import { CartView } from './components/Cart/CartView'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CartView />} />
      </Route>

      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products/new" element={<ProductFormContainer />} />
        <Route path="products/success/:id" element={<ProductSuccess />} />
      </Route>
    </Routes>
  );
}

export default App;