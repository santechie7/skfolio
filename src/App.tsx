/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import SmoothScroll from './components/common/SmoothScroll';
import MouseGlow from './components/common/MouseGlow';
import BackgroundParticles from './components/common/BackgroundParticles';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="relative min-h-screen selection:bg-neon-blue/30 selection:text-white">
          <BackgroundParticles />
          <MouseGlow />
          
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

