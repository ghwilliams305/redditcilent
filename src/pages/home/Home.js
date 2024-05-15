import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";
import styles from '../../resources/css/home.module.css';
import { loadArticles } from "./homeSlice";
import { useSearchParams } from "react-router-dom";

function Home({cards, fetchArticles}) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState([]);
    const [titles, setTitle] = useState();
    
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setError(cards.isError);
        setLoading(cards.isloading);
        setArticle(cards.articles);
    }, [cards]);
    
    useEffect(() => {
        fetchArticles(loadArticles());
    }, []);

    if(error) {
        return <p>Page Loading Error :(</p>
    } else {
        return (
            <>
                {loading ? <p>Loading...</p> : <SearchBar />}
                <section className={styles.main}>
                    {loading ? <p>Loading...</p> : article.map(card => (
                        <ArticleCard data={card} />
                    ))}
                </section>
            </>
        );
    }
}

export default Home;