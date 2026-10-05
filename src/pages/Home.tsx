import WelcomeBoard from "../components/home/WelcomeBoard";
import Introduction from "../components/home/Introduction";
import Works from "../components/home/Works";
import History from "../components/home/History";
import Skills from "../components/home/Skills";
import Intern from "../components/home/Intern";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <WelcomeBoard />
      <Introduction />
      <Works />
      <Skills />
      <History />
      <Intern />
      <Contact />
    </>
  );
}
