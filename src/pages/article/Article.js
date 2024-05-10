import { useEffect, useState } from "react";
import Comment from "../../components/Comment";
import styles from "../../resources/css/article.module.css";
import { useParams } from "react-router-dom";
import { loadArticle } from "./articleSlice";

export default function Article({state, dispatch}) {
    const {article} = useParams();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [articleObj, setArticleObj] = useState({});

    useEffect(() => {
        dispatch(loadArticle());
    }, [article]);

    useEffect(() => {
        setIsError(state.isError);
        setIsLoading(state.isLoading);
        setArticleObj(state.articleObj);
    }, [state]);

    const checkLoading = value => isLoading ? 'Loading...' : value;

    if(isError) {
        return <p>Page Failed to load :(</p>;
    } else {
        return (
            <>
                <figure className={styles.card}>
                    <div>
                        {(isLoading || articleObj.image.search('reddit') === -1) ? "" : <img src="" alt="Article Cover Image" />}
                    </div>
                    <h2>{checkLoading(articleObj.title)}</h2>
                    <figcaption>
                        <p><strong>Posted By:</strong> {checkLoading(articleObj.author)}</p>
                        <p className={styles.time}>{checkLoading(articleObj.date)}</p>
                        <p>Comment #</p>
                    </figcaption>
                </figure>
                <div className={styles.main}>
                    <p>{checkLoading(articleObj.content)}</p>
                    <section>
                        <h2>Comments</h2>
                        <div>
                            {isLoading ? "Loading..." : articleObj.comments.map(item => (
                                <Comment data={item} />
                            ))}
                        </div>
                    </section>
                </div>
            </>
        )
    }
}