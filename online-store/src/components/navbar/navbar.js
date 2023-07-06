import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = () => {
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery("");
  };

  return (
    <div className="wrapper">
      <header className="container">
        <div className="header py-2">
          <div className="grid">
            <Link to="/" className="link">
              <h1 className="brand">OnlineStore</h1>
            </Link>
            <div className="formContainer">
              <form className="search">
                <div className="form-control">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Products..."
                  />
                </div>
                <button
                  type="button"
                  className="search-btn"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { NavBar };
