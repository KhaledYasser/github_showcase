import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import RepoDetailsPage from './pages/RepoDetailsPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/repo/:owner/:name" element={<RepoDetailsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
