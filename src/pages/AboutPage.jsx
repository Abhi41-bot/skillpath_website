// ============================================================
// FILE: src/pages/AboutPage.jsx
// ============================================================
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="about-page">
                <div className="container">
                    <h1>About SkillPath</h1>
                    <p>
                        SkillPath is a modern learning platform designed to help professionals
                        and aspiring developers master in-demand skills through structured,
                        project-based learning.
                    </p>

                    <h2>Our Mission</h2>
                    <p>
                        We believe that everyone deserves access to high-quality, career-focused
                        education. Our mission is to bridge the gap between traditional learning
                        and real-world industry demands by providing curated paths, hands-on
                        projects, and expert mentorship.
                    </p>

                    <h2>Key Features</h2>
                    <ul>
                        <li>Curated learning paths for web development, data science, and more</li>
                        <li>Real-world projects that build a portfolio you can showcase</li>
                        <li>1-on-1 mentorship from industry professionals</li>
                        <li>Active community of learners and experts</li>
                        <li>Career resources including resume reviews and interview prep</li>
                        <li>Flexible, self-paced learning with clear milestones</li>
                    </ul>

                    <h2>Our Values</h2>
                    <p>
                        <strong>Excellence:</strong> We strive for the highest quality in every
                        course, project, and interaction.
                        <br />
                        <strong>Inclusivity:</strong> We create a welcoming environment for
                        learners from all backgrounds and experience levels.
                        <br />
                        <strong>Impact:</strong> We measure our success by the real career
                        outcomes our learners achieve.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;
