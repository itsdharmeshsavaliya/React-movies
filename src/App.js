import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Context from './Components/Context';
import NewContext from './Components/NewContext';
import ScrollToTop from './Components/ScrollToTop';
import SingleMovie from './Components/SingleMovie';
import PopularMovie from './Components/PopularMovie';
import GujaratiMovies from './Components/GujaratiMovies';
import FilterMovie from './Components/FilterMovie';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Context />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/TrendingMovies' element={"TrendingMovies "} />
          <Route exact path='/SingleMovie/:id' element={<SingleMovie />} />
          <Route exact path='/PopularMovies' element={<PopularMovie title='Popular Movies' />} />
          <Route exact path='/FilterMovie' element={<FilterMovie name='Select Your Language Movies' />} />
          <Route exact path='/GujaratiMovies' element={<GujaratiMovies />} />
        </Routes>
        <NewContext />
      </BrowserRouter>
      <ScrollToTop />
    </>
  );
}

export default App;
