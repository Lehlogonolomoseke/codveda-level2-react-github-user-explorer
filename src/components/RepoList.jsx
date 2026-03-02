function RepoList({ repos }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Repositories</h3>

      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <a className="repo-link" href={repo.html_url} target="_blank">
              {repo.name}
            </a>

            <p className="repo-desc">
              ⭐ {repo.stargazers_count}{" "}
              {repo.language ? `• ${repo.language}` : ""}
            </p>

            {repo.description && (
              <p className="repo-desc">
                {repo.description.length > 80
                  ? repo.description.slice(0, 80) + "..."
                  : repo.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
