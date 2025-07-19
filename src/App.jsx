import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Atirlar from "./components/Atirlar";
import Keshbek from "./components/Keshbek";
import Katalog from "./components/Katalog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Banner />
        <Header />
        <Atirlar />
        <Keshbek />
        <Katalog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
