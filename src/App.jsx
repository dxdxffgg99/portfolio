import './App.css'
import Background from './component/Background'
import Header from './component/Header'
import ClickSpark from './component/ClickSpark'
import Main from './component/Main'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {
  return (
    <>
      <ClickSpark sparkColor='#ffffff8d' sparkSize={10} sparkRadius={15} sparkCount={8} duration={1000}>
        <Background />
        <Header />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ClickSpark>
    </>
  );
}

export default App