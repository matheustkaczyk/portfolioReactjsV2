import Header from './components/Header';
import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
