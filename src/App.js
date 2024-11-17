import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Hsu from './Hsu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hsu' element={<Hsu/>}  />          
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
