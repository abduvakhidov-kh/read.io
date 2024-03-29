import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/HomePage'));
const BookDetails = lazy(() => import('@/pages/BookDetails'));
const Read = lazy(() => import('@/pages/Read'));

const RoutesProvider = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<BookDetails />} />
          <Route path="/books/:id" element={<Read />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesProvider;
