/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header';
import Hero from './components/Hero';
import Audience from './components/Audience';
import WhyCourse from './components/WhyCourse';
import Outcomes from './components/Outcomes';
import Methodology from './components/Methodology';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import Enrollment from './components/Enrollment';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30 relative">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <Audience />
      <WhyCourse />
      <Outcomes />
      <Methodology />
      <Curriculum />
      <Instructor />
      <Enrollment />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
