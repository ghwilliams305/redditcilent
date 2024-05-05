import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";
import styles from '../../resources/css/home.module.css';

function Home(props) {
    return (
        <>
            <SearchBar />
            <section className={styles.main}>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </section>
        </>
    );
}

export default Home;