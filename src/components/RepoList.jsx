function RepoList({ repos }) {
  return (
    <div>
      <h2>Repositories</h2>

      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <a href={repo.html_url} target="_blank">
            {repo.name}
          </a>

          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
