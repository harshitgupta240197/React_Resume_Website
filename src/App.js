import './App.css';
import {Banner} from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
