import { Outlet } from "react-router-dom";
import styles from '../resources/css/root.module.css';

function Root() {
    return (
        <>
            <header className={styles.header}>
                <h1>Article Hub</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;