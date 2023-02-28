import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepages from './components/home/Homepages';

function App() {
  return (
    <>
     <Router>
        <Header />
        <Routes> 
          <Route exact path='/' element={<Homepages/>} />
          {/* <Route path='/singlepage/:id' exact element={<SinglePage/>} /> */}
          {/* <Route exact path='/culture' element={<Culture/>} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
