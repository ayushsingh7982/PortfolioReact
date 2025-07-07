import Navbar from "../components/Navbar"; 
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 font-inter text-gray-100">
      <Intro />
    </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 font-inter text-gray-100">
      <About />
    </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 font-inter text-gray-100">
      <Skills />
    </div>
    </div>
  );
}

export default Home;