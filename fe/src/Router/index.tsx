import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/Login";
import { Register } from "../view/pages/Register";
import { Dashboard } from "../view/pages/Dashboard";
import { AuthLayout } from "../view/layouts/AuthLayouts";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Route>


        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
