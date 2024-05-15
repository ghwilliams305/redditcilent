import { BiSearch } from "react-icons/bi";
import styles from '../resources/css/searchBar.module.css';
import { useEffect, useState } from "react";
import { filterCards } from "../resources/js/getArticleCards";


function SearchBar({handleSearch}) {
    const [searchQuestion, setSearchQuestion] = useState(false);

    useEffect(() => {
        handleSearch(searchQuestion);
    }, [searchQuestion]);

    const handleChange = ({target}) => {
        setSearchQuestion(target.value);
    }

    return (
        <article className={styles.container}>
            <button><BiSearch /></button>
            <input 
                name="search"
                placeholder="Search..."
                onChange={handleChange}
                list="article-options" />
        </article>
    );
}

export default SearchBar;