const { Outlet } = require("react-router-dom");


function Root() {
    return (
        <>
            <header>
                <h1>Article Hub</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;