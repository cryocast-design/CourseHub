import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, CheckCircle, ExternalLink, Globe, MonitorPlay, Instagram } from 'lucide-react';
import ReviewSection from '../components/ReviewSection';
import { courses } from '../data/mockData';
import './CourseDetail.css';

const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find(c => c.id === parseInt(id));

    if (!course) {
        return <div className="container" style={{ padding: '4rem' }}>Course not found.</div>;
    }

    const getIcon = (platform) => {
        if (platform === 'YouTube') return <MonitorPlay size={18} />;
        if (platform === 'Instagram') return <Instagram size={18} />;
        return <Globe size={18} />;
    }

    return (
        <div className="course-detail-page">
            <div className="detail-header-bg">
                <div className="container detail-header">
                    <div className="detail-badges">
                        <span className={`badge ${course.platform === 'Skool' ? 'badge-skool' : 'badge-circle'}`}>
                            {course.platform}
                        </span>
                        {course.verified && (
                            <span className="badge badge-verified">
                                <CheckCircle size={14} /> Verified Course
                            </span>
                        )}
                    </div>

                    <h1 className="detail-title">{course.title}</h1>
                    <p className="detail-instructor">by {course.instructor}</p>

                    <div className="detail-stats">
                        <div className="rating-large">
                            <span className="rating-number">{course.rating}</span>
                            <div className="stars">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.round(course.rating) ? "currentColor" : "none"}
                                        className="star-icon"
                                    />
                                ))}
                            </div>
                            <span className="review-count-large">({course.reviewCount} reviews)</span>
                        </div>
                        <div className="price-large">{course.price}</div>
                    </div>
                </div>
            </div>

            <div className="container detail-content">
                <div className="main-col">
                    <section className="detail-section">
                        <h2>About This Course</h2>
                        <div className="tags-list">
                            {course.tags?.map(tag => (
                                <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                        </div>
                        <p className="course-description">{course.description || "No description available."}</p>
                    </section>

                    <ReviewSection reviews={course.reviews} />
                </div>

                <aside className="sidebar-col">
                    <div className="action-card">
                        <img src={course.image} alt={course.title} className="sidebar-thumb" />
                        <button className="btn btn-primary btn-block">Visit {course.platform}</button>
                        <p className="guarantee-text">30-day money-back guarantee mentioned on landing page.</p>
                    </div>

                    {course.socialLinks && course.socialLinks.length > 0 && (
                        <div className="links-card">
                            <h3>Socials & Links</h3>
                            <div className="links-list">
                                {course.socialLinks.map((link, idx) => (
                                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                        {getIcon(link.platform)}
                                        <span>{link.platform}</span>
                                        <ExternalLink size={14} className="external-icon" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
};

export default CourseDetail;
