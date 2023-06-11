import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Dashboard from "./core/pages/Dashboard";
import Login from "./core/pages/Login";
import Signup from "./core/pages/Signup";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useCallback, useEffect, useMemo, useState } from "react";
import userContext from "./lib/api/userContext";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./reduser/userReducer";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const retrieveUser = useCallback(async () => {
    const checkIfTokenExists = () => {
      return !!sessionStorage.getItem("accessToken");
    };

    if (checkIfTokenExists()) {
      try {
        const response = await userContext.getUser().then((response) => {
          dispatch(setUser(response.data.user));
        });
      } catch (error) {
        dispatch(clearUser());
      }
    } else {
      dispatch(clearUser());
    }
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    retrieveUser();
    setIsLoading(false);
  }, []);

  const user = useSelector((state: RootState) => state.user);

  const memoizedUser = useMemo(() => user, [user]);

  const LoginPage = () => {
    return <Navigate to={{ pathname: "/signin" }} />;
  };
  const PrivateRoute = () => {
    if (memoizedUser.loggedIn) {
      return <Outlet />;
    }

    return <Navigate to="/signin" />;
  };

  const PublicRoute = () => {
    if (memoizedUser.loggedIn) {
      return <Navigate to="/dashboard" />;
    }

    return <Outlet />;
  };

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          "Loading.. "
        ) : (
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/signin" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        )}
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
