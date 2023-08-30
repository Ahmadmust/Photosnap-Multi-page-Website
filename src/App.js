import { Routes, Route} from 'react-router-dom'; 
import Header from "./components/Header";
import Home from "./components/Home"
import Features from "./components/Features";
import Footer from'./components/Footer'
import Price from "./components/Pricing";
import Stories from './components/StoriesPage';
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route  path="/" exact element={<Home />}/>
        <Route  path="/stories" exact element={<Stories />}/>
        <Route  path="/features" exact element={<Features />}/>
        <Route  path="/pricing" exact element={<Price />}/>
      </Routes>
    <Footer />
    </>

  );
}

export default App;
