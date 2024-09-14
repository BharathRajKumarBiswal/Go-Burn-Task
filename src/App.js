import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Todolist from './Component/Todolist';
import Tododisplay from "./Component/Tododisplay";


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Todolist/>} />
        <Route path="/Todolost" element={<Todolist/>}/>
        <Route path="/Tododisplay" element={<Tododisplay/>}/>
        
        
      </Routes>
     </Router>
   
    </div>
  );
}

export default App;
