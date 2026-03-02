import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import { fetchUser, fetchRepos } from "./services/githubService";
import "./styles/app.css";

function App() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    const finalUsername = username.trim();
    if (!finalUsername) return;
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const userData = await fetchUser(finalUsername);
      const repoData = await fetchRepos(finalUsername);

      setUser(userData);
      setRepos(repoData);

      navigate("/user");
    } catch (err) {
      setError(err.message || "Something went wrong");
      navigate("/user");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onSearch={handleSearch}
              inputValue={inputValue}
              onInputChange={setInputValue}
            />
          }
        />
        <Route
          path="/user"
          element={
            <User user={user} repos={repos} loading={loading} error={error} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
