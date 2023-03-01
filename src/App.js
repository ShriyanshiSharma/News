import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepages from './components/home/Homepages';
import Footer from './components/common/footer/Footer';
import Stock from './components/pages/Stock';
import Sports from './components/pages/Sport';
import Single from './components/pages/Single';
import Bitcoin from './components/pages/Bitcoin';
import News from './components/common/header/News';
import More from './components/pages/More/More';


function App() {
  return (
    <>
     <Router>
        <Header />
        <News/>
        <Routes> 
          <Route exact path='/' element={<Homepages/>} />
          <Route path='/Single/:id' exact element={<Single/>} />
          <Route exact path='/Bitcoin' element={<Bitcoin/>} />
          <Route exact path='/Sport' element={<Sports/>} />
          <Route exact path='/Stock' element={<Stock/>} />
        </Routes>
        <More/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
