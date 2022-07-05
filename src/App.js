import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/pages/User';
import NotFound from './components/pages/NotFound';
import {GithubProvider} from './components/context/github/GithubContext'
import {AlertProvider} from './components/context/alert/AlertContext'


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router >
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router> 
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
