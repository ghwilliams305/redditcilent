import { useEffect, useState } from 'react';
import styles from '../resources/css/articleCard.module.css';
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function ArticleCard({data}) {
    const [title, setTitle] = useState('Article Title');
    const [ups, setUps] = useState();
    const [image, setImage] = useState('');
    const [date, setDate] = useState();
    const [id, setId] = useState('');
    const [author, setAuthor] = useState('Author');
    const [commentsNum, setCommentsNum] = useState();
    
    useEffect(() => {
        setTitle(data.title);
        setUps(data.ups);
        setImage(data.image);
        setDate(data.date);
        setId(data.id);
        setAuthor(data.author);
        setCommentsNum(data.commentsNum);
    }, [data]);
    
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/article/${id}`)
    }
    
    return (
        <article className={styles.article}>
            <div className={styles.votes}>
                <button><CgArrowLongUp /></button>
                <i>{ups}</i>
                <button><CgArrowLongDown /></button>
            </div>
            <figure className={styles.card} onClick={handleOnClick}>
                <h2>{title}</h2>
                <div>
                    {image ? <img src={image} alt="Article Cover Image" /> : <p>{`${title} by ${author}`}</p>}
                </div>
                <figcaption>
                    <p><strong>Posted By:</strong> {author}</p>
                    <p className={styles.time}>{date}</p>
                    <p>Comments {commentsNum}</p>
                </figcaption>
            </figure>
        </article>
    );
}

export default ArticleCard;