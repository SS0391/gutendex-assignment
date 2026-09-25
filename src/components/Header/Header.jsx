import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from ".Header.module.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className={styles.headerMain}>
      <div className={styles.topHeader}>
        <h1 className={styles.logo}>
          <Link to="/">Home</Link>
        </h1>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input type="text" placeholder="Search for title" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={styles.searchInput} />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
        <Link to="/favorites" className={styles.favoritesLink}>
          <span className={styles.favTxt}>Favorites</span>
        </Link>
      </div>
    </header>
  );
}
