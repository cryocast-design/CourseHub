import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/mockData';
import './AutocompleteSearch.css';

const AutocompleteSearch = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);
    const wrapperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.length > 0) {
            const filtered = courses.filter(c =>
                c.title.toLowerCase().includes(query.toLowerCase()) ||
                c.instructor.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered.slice(0, 5)); // Limit to top 5
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

    // Click outside to close
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleSelect = (id) => {
        navigate(`/course/${id}`); // In real app this would go to detail
        setIsOpen(false);
        setQuery('');
    };

    return (
        <div className="autocomplete-wrapper" ref={wrapperRef}>
            <div className="autocomplete-input-container">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for 'Agency Navigator' or 'Iman'..."
                    className="autocomplete-input"
                    onFocus={() => query.length > 0 && setIsOpen(true)}
                />
                {query && (
                    <button className="clear-btn" onClick={() => setQuery('')}>
                        <X size={16} />
                    </button>
                )}
                <button className="search-submit-btn">Search</button>
            </div>

            {isOpen && results.length > 0 && (
                <div className="autocomplete-dropdown">
                    {results.map(result => (
                        <div
                            key={result.id}
                            className="autocomplete-item"
                            onClick={() => handleSelect(result.id)}
                        >
                            <img src={result.image} alt={result.title} className="item-thumb" />
                            <div className="item-info">
                                <div className="item-title-row">
                                    <span className="item-title">{result.title}</span>
                                    {result.verified && <span className="item-verified-badge">✓</span>}
                                </div>
                                <span className="item-instructor">{result.instructor} • {result.platform}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isOpen && query.length > 0 && results.length === 0 && (
                <div className="autocomplete-dropdown">
                    <div className="no-results">
                        No courses found for "{query}"
                    </div>
                </div>
            )}
        </div>
    );
};

export default AutocompleteSearch;
