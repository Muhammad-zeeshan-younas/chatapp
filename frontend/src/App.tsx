import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import logo from "./image.png";
import "./App.scss";
import Login from "./core/pages/Login";

function App() {
  const LoginPage = () => {
    return <Navigate to={{ pathname: "/login" }} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
