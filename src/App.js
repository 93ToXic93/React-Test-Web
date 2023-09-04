import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ContactsPage from './components/ContactsPage'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
        
      </Routes>

      </div>
    
    </Router>
  );
}

export default App;