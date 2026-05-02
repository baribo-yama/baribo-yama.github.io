import WelcomeBoard from '../components/home/WelcomeBoard'
import Introduction from '../components/home/Introduction'
import Skills from '../components/home/Skills'
import Works from '../components/home/Works'
import Contact from '../components/home/Contact'

export default function Home() {
  return (
    <>
      <WelcomeBoard />
      <Introduction />
      <Skills />
      <Works />
      <Contact />
    </>
  )
}
