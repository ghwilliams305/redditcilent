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
            <div className={styles.card}>
                <h2>Article Title</h2>
                <img src="" alt="Article Cover Image" />
                <div>
                    <p><strong>Posted By:</strong> Author</p>
                    <p>Time</p>
                    <p>Comment #</p>
                </div>
            </div>
        </article>
    );
}

export default ArticleCard;