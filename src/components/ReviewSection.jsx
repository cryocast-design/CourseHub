import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import './ReviewSection.css';

const ReviewSection = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return (
            <div className="review-section">
                <h3>Reviews</h3>
                <p className="no-reviews">No reviews yet. Be the first to review!</p>
            </div>
        );
    }

    return (
        <div className="review-section">
            <h3>Reviews ({reviews.length})</h3>
            <div className="reviews-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <span className="review-user">{review.user}</span>
                            <span className="review-date">{review.date}</span>
                        </div>
                        <div className="review-rating">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    fill={i < review.rating ? "currentColor" : "none"}
                                    className={i < review.rating ? "star-filled" : "star-empty"}
                                />
                            ))}
                        </div>
                        <p className="review-text">{review.text}</p>
                        {review.verified && (
                            <div className="verified-purchase">
                                <CheckCircle size={14} />
                                <span>Verified student</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
