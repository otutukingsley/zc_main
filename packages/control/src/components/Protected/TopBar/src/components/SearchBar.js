<<<<<<<< HEAD:topbar/src/components/SearchBar.js
import styles from '../styles/SearchBar.module.css'
========
import styles from "../styles/SearchBar.module.css";
>>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78:packages/control/src/components/Protected/TopBar/src/components/SearchBar.js
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search here"
      />
      <img src="/search-2-line.svg" className={styles.searchSvg} alt="search" />
    </div>
  );
};

export default SearchBar;
