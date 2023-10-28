import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import FixedHeader from './components/FixedHeader';
import Skills from "./components/Skill";  

function App() {
  return (
    <div className="App">
        <FixedHeader/>
        <div className='contents'>
          <div>
            <Routes>
            <Route index element={<Home/>}/> 
            <Route path="Skills" element={<Skills/>} />
          </Routes>
          </div>
      </div>
       
    </div>
     
      
     
  );
}

export default App;
