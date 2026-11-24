import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { Projects } from '@/components/Projects';
import { Machinery } from '@/components/Machinery';
import { Sustainability } from '@/components/Sustainability';
import { News } from '@/components/News';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ProjectDetail } from '@/components/ProjectDetail';
import { NewsDetail } from '@/components/NewsDetail';
import { PROJECTS, NEWS } from '@/data';

type Route =
  | { page: 'home' }
  | { page: 'project'; slug: string }
  | { page: 'news'; slug: string };

export default function App() {
  const [route, setRoute] = useState<Route>({ page: 'home' });
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  const goHome = () => {
    setRoute({ page: 'home' });
    setPendingScroll(null);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openProject = (slug: string) => {
    setRoute({ page: 'project', slug });
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openNews = (slug: string) => {
    setRoute({ page: 'news', slug });
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // When navbar clicked: if on home, scroll directly; if on detail, go home first then scroll
  const handleNav = (href: string) => {
    if (route.page === 'home') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setPendingScroll(href);
      setRoute({ page: 'home' });
    }
  };

  // After returning home, scroll to the pending section if any
  useEffect(() => {
    if (route.page === 'home' && pendingScroll) {
      const el = document.querySelector(pendingScroll);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setPendingScroll(null);
    }
  }, [route, pendingScroll]);

  if (route.page === 'project') {
    const project = PROJECTS.find((p) => p.slug === route.slug);
    if (project) {
      return (
        <div className="bg-charcoal text-ivory min-h-screen overflow-x-hidden">
          <Navbar onNavigate={handleNav} />
          <main>
            <ProjectDetail project={project} onBack={goHome} />
          </main>
          <Footer />
        </div>
      );
    }
  }

  if (route.page === 'news') {
    const article = NEWS.find((n) => n.slug === route.slug);
    if (article) {
      return (
        <div className="bg-charcoal text-ivory min-h-screen overflow-x-hidden">
          <Navbar onNavigate={handleNav} />
          <main>
            <NewsDetail article={article} onBack={goHome} onNavigate={openNews} />
          </main>
          <Footer />
        </div>
      );
    }
  }

  return (
    <div className="bg-charcoal text-ivory min-h-screen overflow-x-hidden">
      <Navbar onNavigate={handleNav} />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects onOpen={openProject} />
        <Machinery />
        <Sustainability />
        <News onOpen={openNews} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
