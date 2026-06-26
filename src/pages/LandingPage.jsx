
import HeroSection from '../component/HeroSection';
import FeatureCard from '../component/FeatureCard';
import TestimonialSection from '../component/TestimonialSection';
import CTABanner from '../component/CTABanner';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

function LandingPage() {
    const features = [
        {
            icon: '📚',
            title: 'Curated Learning Paths',
            description: 'Expert-designed roadmaps that guide you from beginner to job-ready with clear milestones.',
        },
        {
            icon: '🚀',
            title: 'Hands-on Projects',
            description: 'Build real-world projects that showcase your skills and impress employers.',
        },
        {
            icon: '👨‍🏫',
            title: 'Mentorship & Community',
            description: 'Get personalized guidance from industry experts and connect with a supportive peer network.',
        },
        {
            icon: '🎯',
            title: 'Career-Focused',
            description: 'Learn exactly what you need to land your dream role with practical, industry-relevant content.',
        },
    ];

    return (
        <>
            <Navbar />
            <HeroSection />
            <section className="features">
                <div className="container">
                    <h2>Why SkillPath?</h2>
                    <div className="features-grid">
                        {features.map((f, idx) => (
                            <FeatureCard
                                key={idx}
                                icon={f.icon}
                                title={f.title}
                                description={f.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <TestimonialSection />
            <CTABanner />
            <Footer />
        </>
    );
}

export default LandingPage;
