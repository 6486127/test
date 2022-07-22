
import './App.css';
import Sign from './Pages/Sign/Sign';
import { Route, Routes } from 'react-router-dom';
import Reg from './Pages/Reg/Reg';
function App() {



  return (
<>
  <div className='container'>
  <div className='aside'>
            <p className='aside__subtitle'>Sign up</p>
          </div>
          
        <div className="form__bodys">
  <Routes>
   <Route  path='/' element={<Sign />}/>
   <Route path='/regcomplite' element={<Reg/>}/>
  </Routes>  
        </div>
  </div>

</>
  );
}

export default App;
