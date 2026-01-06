import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/mockData';
import './Directory.css';

const Directory = () => {
    const [filters, setFilters] = useState({
        platform: 'All',
        category: 'All',
        verified: false,
    });

    const [sortBy, setSortBy] = useState('rating');

    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            if (filters.platform !== 'All' && !course.platform.includes(filters.platform)) return false;
            if (filters.category !== 'All' && course.category !== filters.category) return false;
            if (filters.verified && !course.verified) return false;
            return true;
        }).sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating;
            if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
            return 0; // default
        });
    }, [filters, sortBy]);

    const uniqueCategories = [...new Set(courses.map(c => c.category))];

    return (
        <div className="directory-page container">
            <div className="directory-header">
                <h1>Explore Courses</h1>
                <p>Browse our verified directory of influencer courses.</p>
            </div>

            <div className="directory-layout">
                <aside className="filters-sidebar">
                    <div className="filters-header">
                        <Filter size={20} />
                        <h2>Filters</h2>
                    </div>

                    <div className="filter-group">
                        <label>Platform</label>
                        <select
                            value={filters.platform}
                            onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
                        >
                            <option value="All">All Platforms</option>
                            <option value="Skool">Skool</option>
                            <option value="Circle">Circle</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Category</label>
                        <select
                            value={filters.category}
                            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                        >
                            <option value="All">All Categories</option>
                            {uniqueCategories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={filters.verified}
                                onChange={(e) => setFilters({ ...filters, verified: e.target.checked })}
                            />
                            Verified Only
                        </label>
                    </div>
                </aside>

                <main className="courses-grid-container">
                    <div className="results-header">
                        <span>Showing {filteredCourses.length} courses</span>
                        <div className="sort-controls">
                            <SlidersHorizontal size={16} />
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="rating">Highest Rated</option>
                                <option value="reviews">Most Reviewed</option>
                            </select>
                        </div>
                    </div>

                    <div className="courses-grid">
                        {filteredCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Directory;
