import LandingPage from "./landing_page/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';

function App() {
  return (
      <Router>
        <LandingPage />
      </Router>
    );
}

export default App;

