function Search({ onSearch, inputValue, onInputChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSearch(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-row">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}

export default Search;
