import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import Experience from "../components/Experience";

function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white">
      <Navbar />
      <IntroSection />
      <Experience />
    </div>
  );
}

export default Home;
