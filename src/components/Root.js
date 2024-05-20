import { Outlet, useNavigate } from "react-router-dom";
import styles from '../resources/css/root.module.css';

function Root() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            <header className={styles.header} onClick={handleClick}>
                <h1>Article Hub</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;