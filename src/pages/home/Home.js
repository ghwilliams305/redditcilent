import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";
import styles from '../../resources/css/home.module.css';
import { loadArticles } from "./homeSlice";

function Home({cards, fetchArticles}) {
    const {error, setError} = useState(false);
    const {loading, setLoading} = useState(true);
    const {article, setArticle} = useState([]);

    useEffect(() => {
        const {isloading, isError, articles} = cards;

        setError(isError);
        setLoading(isloading);

        if(isloading || isError) {
            setArticle(articles);
        }
    }, [cards]);

    useEffect(() => {
        fetchArticles(loadArticles);
    }, []);

    if(error) {
        return <p>Error when loading page :(</p>
    } else {
        return (
            <>
                <SearchBar />
                <section className={styles.main}>
                    {loading ? <p>Loading...</p> : article.map((card) => (
                        <ArticleCard data={card} />
                    ))}
                </section>
            </>
        );
    }
}

export default Home;