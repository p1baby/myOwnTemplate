import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './styles/variables.scss';
import './styles/default.scss';

import { Navbar, Footer } from './components';

const App: FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent: FC = () => {
  return (
    <section className='wrapper'>
    <nav>
      <Navbar />
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
  </section>
  );
}

export default App;
