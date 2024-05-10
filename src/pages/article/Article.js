import Comment from "../../components/Comment";
import styles from "../../resources/css/article.module.css";

export default function Article() {
    return (
        <>
            <figure className={styles.card}>
                <div>
                    <img src="" alt="Article Cover Image" />
                </div>
                <h2>Article Title</h2>
                <figcaption>
                    <p><strong>Posted By:</strong> Author</p>
                    <p className={styles.time}>Time</p>
                    <p>Comment #</p>
                </figcaption>
            </figure>
            <div className={styles.main}>
                <p>Article Content Article Content Article Content Article Content Article Content Article Content Article Content Article Content</p>
                <section>
                    <h2>Comments</h2>
                    <div>
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </section>
            </div>
        </>
    )
}