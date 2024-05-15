import { BiSearch } from "react-icons/bi";
import styles from '../resources/css/searchBar.module.css';
import { useEffect, useState } from "react";
import { filterCards } from "../resources/js/getArticleCards";


function SearchBar({articles}) {
    const [filteredCards, setFilteredCards] = useState(false);
    const [searchQuestion, setSearchQuestion] = useState();

    useEffect(() => {
        const filteredArticles = filterCards(articles, searchQuestion);

        setFilteredCards(filteredArticles);
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
            <datalist id='article-options'>
                {filteredCards ? filteredCards.map(card => (
                    <p>{`${card.title} by ${card.author}`}</p>
                )) : ''}
            </datalist>
        </article>
    );
}

export default SearchBar;