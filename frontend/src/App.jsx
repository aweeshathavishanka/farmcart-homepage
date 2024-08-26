import "./App.css";
import CategoryBar from "./Components/CategoryBar";
import CTABar from "./Components/CTABar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NewsBar from "./Components/NewsBar";
import ProcessCTA from "./Components/ProcessCTA";
import ShopList from "./Components/ShopList";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <div className="sticky top-0 bg-white shadow-md bg-opacity-70 backdrop-blur-md">
        <NewsBar />
        <Header />
        <CategoryBar />
      </div>
      <Hero />
      <CTABar />
      <ProcessCTA />
      <ShopList />
      <Testimonials />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
