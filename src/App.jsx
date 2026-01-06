import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Directory from './pages/Directory';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/about" element={<div className="container" style={{ padding: '4rem 0' }}><h1>About Us</h1><p>Mission statement for CourseGuard.</p></div>} />
      </Routes>
    </Layout>
  );
}

export default App;
