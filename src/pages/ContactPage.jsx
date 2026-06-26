// ============================================================
// FILE: src/pages/ContactPage.jsx
// ============================================================
import { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields are filled
        const { name, email, subject, message } = formData;
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate submission
        setIsSubmitted(true);

        // Reset form (optional)
        // setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <main className="contact-page">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p className="subtitle">
                        Have a question or want to learn more? We'd love to hear from you.
                    </p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {isSubmitted && (
                            <div className="success-message">
                                ✅ Thank you! Your message has been sent. We'll get back to you soon.
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitted}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitted}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What's this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                disabled={isSubmitted}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us more..."
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmitted}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={isSubmitted}
                        >
                            {isSubmitted ? 'Sent ✓' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ContactPage;
