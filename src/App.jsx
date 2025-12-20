import './App.css'
import Background from './component/Background'
import Header from './component/Header'
import ClickSpark from './component/ClickSpark'
import Main from './component/Main'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'
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
      </ClickSpark>
    </>
  );
}

export default App

//using ReactBits
//https://reactbits.dev/