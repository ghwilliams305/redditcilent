import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";

function Home(props) {
    return (
        <>
            <SearchBar />
            <section>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </section>
        </>
    );
}

export default Home;