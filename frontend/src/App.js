import "./App.css";
import { useAuth } from "./hooks/useAuth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import EditProfile from "./EditProfile/EditProfile";
import Profile from "./Auth/Profile/Profile";
import Photo from "./Auth/Photo/Photo";

function App() {
  const { auth, loading } = useAuth();
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/profile"
              element={auth ? <EditProfile /> : <Navigate to="login" />}
            ></Route>
            <Route
              path="/users/:id"
              element={auth ? <Profile /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={!auth ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/photos/:id"
              element={auth ? <Photo /> : <Navigate to="/login" />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
