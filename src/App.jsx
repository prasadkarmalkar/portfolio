import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App bg-slate-900">
<Home className="home"></Home>
<About></About>
<Skills></Skills>
<Projects></Projects>
<Footer></Footer>
    </div>
  );
}

export default App;
