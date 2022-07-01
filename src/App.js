import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cli from "./Cli";
import Subscribe from "./components/Subscribe";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cli />
      <Subscribe />
    </div>
  );
}

export default App;
