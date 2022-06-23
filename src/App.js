import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router >
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />

          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
