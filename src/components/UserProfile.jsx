function UserProfile({ user }) {
  return (
    <div className="profile-card">
      <img src={user.avatar_url} width="120" />

      <h2>{user.name || user.login}</h2>

      <p>{user.bio}</p>

      <p>
        <a href={user.html_url} target="_blank">
          View GitHub Profile
        </a>
      </p>

      <p>
        Followers: {user.followers} | Following: {user.following}
      </p>
    </div>
  );
}

export default UserProfile;
