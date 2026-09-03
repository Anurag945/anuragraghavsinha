import Hero from "../components/Hero";
import About from "../components/About";
import CrmCase from "../components/CrmCase";
import HelpdeskCase from "../components/HelpdeskCase";
import GenzysipCase from "../components/GenzysipCase";
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
      <GenzysipCase />
      <Skills />
      <GithubActivity />
      <Recognition />
      <Contact />
    </>
  );
}
