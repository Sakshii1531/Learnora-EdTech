import {Route , Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from '/src/components/common/Navbar';

function App() {

  return (
   <div className='w-screen min-h-screen bg-[#001B22] flex flex-col'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
   </div>
  );
}

export default App;
