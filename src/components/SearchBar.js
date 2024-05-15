import { BiSearch } from "react-icons/bi";
import styles from '../resources/css/searchBar.module.css';
import { useEffect, useState } from "react";
import { filterCards } from "../resources/js/getArticleCards";


function SearchBar({handleSearch, handleSubmit}) {
    const [searchQuestion, setSearchQuestion] = useState('');

    useEffect(() => {
        handleSearch(searchQuestion);
    }, [searchQuestion]);

    const handleChange = ({target}) => {
        setSearchQuestion(target.value);
    }

    const handleSearchSubmit = () => {
        handleSubmit(searchQuestion);
    }

    const handleKeySubmit = (e) => {
        if(e.code == 'Enter') {
            handleSubmit(searchQuestion);
        }
    }

    return (
        <article className={styles.container}>
            <button onClick={handleSearchSubmit}><BiSearch /></button>
            <input 
                name="search"
                placeholder="Search..."
                onChange={handleChange}
                list="article-options"
                value={searchQuestion}
                onKeyDown={handleKeySubmit} />
        </article>
    );
}

export default SearchBar;