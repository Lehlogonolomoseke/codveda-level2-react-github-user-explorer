import UserProfile from "../components/UserProfile";
import RepoList from "../components/RepoList";
import Loader from "../components/Loader";
import Error from "../components/Error";

function User({ user, repos, loading, error }) {
  return (
    <div className="container">
      {loading && <Loader />}
      {error && <Error message={error} />}

      {!loading && !error && user && (
        <>
          <UserProfile user={user} />
          <RepoList repos={repos} />
        </>
      )}
    </div>
  );
}

export default User;
