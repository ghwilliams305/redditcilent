import { BiSearch } from "react-icons/bi";
import styles from '../resources/css/searchBar.module.css';


function SearchBar() {
    return (
        <article className={styles.container}>
            <button><BiSearch /></button>
            <input 
                name="search"
                placeholder="Search..." />
        </article>
    );
}

export default SearchBar;