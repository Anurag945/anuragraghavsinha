import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import AskAI from "./components/AskAI";

import Home from "./pages/Home";
import CrmCaseStudy from "./pages/CrmCaseStudy";
import HelpdeskCaseStudy from "./pages/HelpdeskCaseStudy";
import NotFound from "./pages/NotFound";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const location = useLocation();

  // Lenis smooth scroll — initialised once for the whole app
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Re-create scroll reveals on every route change + jump to top
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <>
      <div className="grain" aria-hidden="true" />
      {isHome && <ScrollProgress />}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/central-crm" element={<CrmCaseStudy />} />
          <Route path="/work/lnmiit-helpdesk" element={<HelpdeskCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <AskAI />
    </>
  );
}
