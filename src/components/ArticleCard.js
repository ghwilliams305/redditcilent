import styles from '../resources/css/articleCard.module.css';
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";

function ArticleCard() {
    return (
        <article className={styles.article}>
            <div className={styles.votes}>
                <button><CgArrowLongUp /></button>
                <i>0</i>
                <button><CgArrowLongDown /></button>
            </div>
            <figure className={styles.card}>
                <h2>Article Title</h2>
                <div>
                    <img src="" alt="Article Cover Image" />
                </div>
                <figcaption>
                    <p><strong>Posted By:</strong> Author</p>
                    <p className={styles.time}>Time</p>
                    <p>Comment #</p>
                </figcaption>
            </figure>
        </article>
    );
}

export default ArticleCard;