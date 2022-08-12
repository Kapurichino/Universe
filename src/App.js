
import "./App.css"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {BrowserRouter as Router} from 'react-router-dom';
import Home from "./pages";



function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
