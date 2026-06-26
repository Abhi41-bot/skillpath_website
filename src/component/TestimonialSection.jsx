
function TestimonialSection() {
    const testimonials = [
        {
            quote: "SkillPath transformed my career. The structured path and real-world projects gave me the confidence to switch to tech.",
            author: "Priya Sharma",
            role: "Software Engineer",
        },
        {
            quote: "The mentorship and community support are unparalleled. I went from beginner to job-ready in just 6 months.",
            author: "Amit Patel",
            role: "Data Analyst",
        },
        {
            quote: "Hands-on projects and clear roadmaps made all the difference. I recommend SkillPath to everyone starting out.",
            author: "Sneha Reddy",
            role: "Product Manager",
        },
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2>What Our Learners Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <p className="quote">"{t.quote}"</p>
                            <p className="author">{t.author}</p>
                            <p className="role">{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
