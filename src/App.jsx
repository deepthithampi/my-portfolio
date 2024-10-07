import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; 
import './styles/portfolio.css'; 
import './styles/footer.css';

function App() {
  return (
    <>
      <Header />
      <main className="mx-3">
       <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default App;

