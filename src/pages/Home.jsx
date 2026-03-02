import Search from "../components/Search";

function Home({ onSearch, inputValue, onInputChange }) {
  return (
    <div className="container">
      <h1 className="title">Lehlogonolo GitHub Explorer</h1>
      <Search
        onSearch={onSearch}
        inputValue={inputValue}
        onInputChange={onInputChange}
      />
      <p className="subtitle">Developed by Lehlogonolo Moseke</p>
    </div>
  );
}

export default Home;
