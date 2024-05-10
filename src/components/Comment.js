import styles from '../resources/css/comment.module.css';

function Comment() {
    return (
        <article className={styles.comment}>
            <div>
                <h2 className={styles.author}>Commentor</h2>
                <p>Time</p>
            </div>
            <p>Comments</p>
        </article>
    );
}

export default Comment;