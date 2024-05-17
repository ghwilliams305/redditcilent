import { useEffect, useState } from 'react';
import styles from '../resources/css/comment.module.css';
import MarkdownRenderer from 'react-markdown-renderer';

function Comment({data}) {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [time, setTime] = useState();

    useEffect(() => {
        setAuthor(data.author);
        setContent(data.content);
        setTime(data.time);
    }, [data]);

    return (
        <article className={styles.comment}>
            <div>
                <h2 className={styles.author}>{author}</h2>
                <p>{time}</p>
            </div>
            <MarkdownRenderer markdown={content} className={styles.content} />
        </article>
    );
}

export default Comment;