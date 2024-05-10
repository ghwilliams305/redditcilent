import Comment from "../../components/Comment";
import styles from "../../resources/css/article.module.css";

export default function Article() {
    return (
        <>
            <figure>
                <h2>Article Title</h2>
                <div>
                    <img src="" alt="Article Cover Image" />
                </div>
                <figcaption>
                    <p><strong>Posted By:</strong> Author</p>
                    <p>Time</p>
                    <p>Comment #</p>
                </figcaption>
            </figure>
            <section>
                <p></p>
            </section>
            <section>
                <h2></h2>
                <div>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </section>
        </>
    )
}