import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ContactsPage from './components/ContactsPage'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <div className="MainDiv">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
        
      </Routes>

      </div>
    
    <footer className="Footer">

      <h1>Заповядайте отново!</h1>

    </footer>
    </Router>
    
  );
}

export default App;