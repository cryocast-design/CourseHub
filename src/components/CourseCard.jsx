import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    return (
        <Link to={`/course/${course.id}`} className="course-card">
            <div className="card-image-wrapper">
                <img src={course.image} alt={course.title} className="card-image" />
                <span className={`badge badge-location ${course.platform === 'Skool' ? 'badge-skool' : 'badge-circle'}`}>
                    {course.platform}
                </span>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{course.title}</h3>
                    {course.verified && (
                        <CheckCircle size={16} className="verified-icon" aria-label="Verified Course" />
                    )}
                </div>
                <p className="card-instructor">by {course.instructor}</p>

                <div className="card-meta">
                    <div className="rating">
                        <Star size={14} fill="currentColor" className="star-icon" />
                        <span>{course.rating}</span>
                        <span className="review-count">({course.reviewCount})</span>
                    </div>
                    <div className="price">{course.price}</div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
