import About from "./components/About";
import Articles from "./components/Articles";
import Details from "./components/Details/Details";
import Experts from "./components/Experts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Practitioners from "./components/Practitioners";
import Statistics from "./components/Statistics";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* About Section */}
      <Statistics />
      {/* Practitioners Sections */}
      <Practitioners />
      {/* Details Section */}
      <div className="d-flex flex-column gap-3">
        <Details />
        <Details />
        <Details />
      </div>

      <div className="row">
        <div className="col">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p>
              Connect with a credentialed & licensed practitioner and start your
              mental wellbeing journey!
            </p>
            <button style={{ width: "100px" }}>Explore More</button>
          </div>
        </div>
      </div>
      {/* Experts Section */}
      <Experts />
      {/* Articles Section */}
      <Articles />
      {/* Support */}
      <Support />
    </div>
  );
}

export default App;
