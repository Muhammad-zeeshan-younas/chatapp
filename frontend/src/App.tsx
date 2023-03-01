import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./core/pages/Dashboard";
import Login from "./core/pages/Login";
import Signup from "./core/pages/Signup";

function App() {
  const LoginPage = () => {
    return <Navigate to={{ pathname: "/signin" }} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
