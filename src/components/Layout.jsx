import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, User, ShieldCheck } from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <ShieldCheck className="logo-icon" />
                        <span>CourseGuard</span>
                    </Link>

                    <nav className="nav-desktop">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/directory" className="nav-link">Directory</Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </nav>

                    <div className="header-actions">
                        <div className="search-trigger">
                            <Search size={20} />
                        </div>
                        <button className="btn btn-primary">
                            <User size={18} />
                            <span>Login</span>
                        </button>
                        <button className="mobile-menu-btn">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div>
                            <h3>CourseGuard</h3>
                            <p>Transparency in the creator economy.</p>
                        </div>
                        <div>
                            <h4>Platform</h4>
                            <ul>
                                <li><Link to="/directory">Browse Courses</Link></li>
                                <li><Link to="/directory?platform=Skool">Skool Resources</Link></li>
                                <li><Link to="/directory?platform=Circle">Circle Communities</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        &copy; {new Date().getFullYear()} CourseGuard. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
