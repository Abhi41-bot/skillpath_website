// ============================================================
// FILE: src/pages/NotFoundPage.jsx
// ============================================================
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function NotFoundPage() {
    return (
        <>
            <Navbar />
            <main className="not-found">
                <div className="container">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn">
                        Go Back Home
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default NotFoundPage;
