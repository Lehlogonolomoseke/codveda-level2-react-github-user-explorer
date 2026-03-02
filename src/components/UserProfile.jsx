import { Link } from "react-router-dom";

function UserProfile({ user }) {
  return (
    <div>
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>

      <div className="card">
        <div className="user-row">
          <img src={user.avatar_url} alt="avatar" className="avatar" />

          <div>
            <h2 className="user-name">{user.name || user.login}</h2>

            {user.bio && <p className="user-meta">{user.bio}</p>}

            <div className="user-stats">
              <div className="stat">
                Followers: <strong>{user.followers}</strong>
              </div>

              <div className="stat">
                Following: <strong>{user.following}</strong>
              </div>

              <div className="stat">
                Repos: <strong>{user.public_repos}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
