import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const categorys = ["Fiction", "Mystery", "Thriller", "Romance", "Fantasy", "Morality", "Society", "Power", "Justice", "Adventure", "Tragedy", "War", "Philosophy"];

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.topHeader}>
        <Link to="/" className={styles.logo} onClick={() => setQuery("")}>
          Book App
        </Link>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input type="text" placeholder="Search for title" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        <Link to="/favorites" className={styles.favLink}>
          Favorites
        </Link>
      </div>

      <nav className={styles.navCategorys}>
        {categorys.map((cat) => (
          <Link key={cat} to={`/category/${cat.toLowerCase()}`} className={styles.linkCategorys}>
            {cat}
          </Link>
        ))}
      </nav>
    </header>
  );
}
