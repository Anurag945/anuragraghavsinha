import Hero from "../components/Hero";
import About from "../components/About";
import CrmCase from "../components/CrmCase";
import HelpdeskCase from "../components/HelpdeskCase";
import Skills from "../components/Skills";
import GithubActivity from "../components/GithubActivity";
import Recognition from "../components/Recognition";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CrmCase />
      <HelpdeskCase />
      <Skills />
      <GithubActivity />
      <Recognition />
      <Contact />
    </>
  );
}
