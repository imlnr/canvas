import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Custom from './pages/Custom';
import First from './pages/First';
import MainRoutes from './AllRoutes/MainRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <First/> */}
      {/* <Custom/> */}
      <MainRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
