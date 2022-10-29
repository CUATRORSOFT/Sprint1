//import logo from './favicon.ico';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home from './components/Home';
import Metricas from './components/Metricas';

function App() {
  return (

    <div>
      <Header />
      <Home />
      <Metricas />
      <section>
      <Footer/>
      </section>
    </div>

  );
}

export default App;
