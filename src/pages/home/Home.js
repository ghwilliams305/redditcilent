import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";
import styles from '../../resources/css/home.module.css';
import { loadArticles } from "./homeSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { filterCards } from "../../resources/js/getArticleCards";

function Home({cards, fetchArticles}) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState([]);
    const [titles, setTitle] = useState();
    
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchQuestion = searchParams.get('q');

        if(searchQuestion) {
            setArticle(filterCards(cards.articles, searchQuestion));
        }
    }, [searchParams]);

    useEffect(() => {
        setError(cards.isError);
        setLoading(cards.isloading);
        setArticle(cards.articles);
    }, [cards]);
    
    useEffect(() => {
        fetchArticles(loadArticles());
    }, []);

    const navigate = useNavigate();

    const handleSearch = (searchQuestion) => {
        if(searchQuestion) {
            const filteredArticles = filterCards(cards.articles, searchQuestion);

            setArticle(filteredArticles);
        }
    }

    const handleSubmit = (searchQuestion) => {
        if(article.length === 1) {
            navigate(`/article/${article[0].id}`);
        } else {
            setSearchParams(searchQuestion ? {q: searchQuestion} : {});
        }
    }

    if(error) {
        return <p>Page Loading Error :( {JSON.stringify(article)}</p>
    } else {
        return (
            <>
                {loading ? <p>Loading...</p> : <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />}
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