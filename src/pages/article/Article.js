import { useEffect, useState } from "react";
import Comment from "../../components/Comment";
import styles from "../../resources/css/article.module.css";
import MarkdownRenderer from 'react-markdown-renderer';
import { useParams } from "react-router-dom";
import { loadArticle } from "./articleSlice";

export default function Article({state, dispatch}) {
    const {article} = useParams();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [articleObj, setArticleObj] = useState({});

    useEffect(() => {
        dispatch(loadArticle(article));
    }, [article]);

    useEffect(() => {
        setIsError(state.isError);
        setIsLoading(state.isLoading);
        setArticleObj(state.articleObj);
    }, [state]);

    const checkLoading = value => isLoading ? 'Loading...' : value;

    if(isError) {
        return (
            <p>Page Failed to Loaded :( <br /> {(typeof articleObj === 'string') ? articleObj : JSON.stringify(articleObj)}</p>
        );
    } else {
        return (
            <>
                <figure className={styles.card}>
                    <div>
                        {(isLoading || !articleObj.image) ? "" : <embed src={articleObj.image} alt="Article Cover Image" />}
                    </div>
                    <h2>{checkLoading(articleObj.title)}</h2>
                    <figcaption>
                        <p><strong>Posted By:</strong> {checkLoading(articleObj.author)}</p>
                        <p className={styles.time}>{checkLoading(articleObj.date)}</p>
                        <p>Comment #</p>
                    </figcaption>
                </figure>
                <div className={styles.main}>
                    <MarkdownRenderer markdown={checkLoading(articleObj.content)} className={styles.content} />
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