import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="pages">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
