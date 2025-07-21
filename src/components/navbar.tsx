export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#top">General</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#publications">Publications</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#talks">Talks</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}