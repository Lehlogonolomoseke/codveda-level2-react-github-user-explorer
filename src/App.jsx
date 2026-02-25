import { useState } from "react";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import RepoList from "./components/RepoList";
import Loader from "./components/Loader";
import Error from "./components/Error";

import { fetchUser, fetchRepos } from "./services/githubService";

import "./styles/app.css";

function App() {
  const [user, setUser] = useState(null);

  const [repos, setRepos] = useState([]);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);

    setError("");

    setUser(null);

    setRepos([]);

    try {
      const userData = await fetchUser(username);

      const repoData = await fetchRepos(username);

      setUser(userData);

      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">Lehlogonolo GitHub Explorer</h1>

      <Search onSearch={handleSearch} />

      {loading && <Loader />}

      {error && <Error message={error} />}

      {user && <UserProfile user={user} />}

      {repos.length > 0 && <RepoList repos={repos} />}

      <footer className="footer">Developed by Lehlogonolo Moseke</footer>
    </div>
  );
}

export default App;
