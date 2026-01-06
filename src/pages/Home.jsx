import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Users, TrendingUp } from 'lucide-react';
import AutocompleteSearch from '../components/AutocompleteSearch';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/mockData';
import './Home.css';

const Home = () => {
    const featuredCourses = courses.filter(c => c.verified).slice(0, 3);
    const trendingCourses = courses.slice(0, 3); // Just taking first 3 for demo

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="container hero-content">
                    <h1>Find <span>Legit</span> Courses<br />Avoid the Scams.</h1>
                    <p className="hero-subtitle">The most trusted directory for Skool, Circle, and Independent creator courses. Verified reviews from real students.</p>

                    <div style={{ marginBottom: '3rem' }}>
                        <AutocompleteSearch />
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <Shield className="stat-icon" />
                            <span>100% Verified Reviews</span>
                        </div>
                        <div className="stat">
                            <Users className="stat-icon" />
                            <span>50k+ Students</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container">
                <div className="section-header">
                    <h2>Verified Skool Courses</h2>
                    <Link to="/directory?verified=true" className="view-all">View All</Link>
                </div>
                <div className="courses-grid">
                    {featuredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </section>

            <section className="section bg-subtle">
                <div className="container">
                    <div className="section-header">
                        <h2>Trending Now</h2>
                        <Link to="/directory" className="view-all">View All</Link>
                    </div>
                    <div className="courses-grid">
                        {trendingCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
