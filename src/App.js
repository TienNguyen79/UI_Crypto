import "./App.css";
import Header from "./components/Header";
import CryptocurrencyPrices from "./components/CryptocurrencyPrices";
import CryptoPlatform from "./components/CryptoPlatform";
import CryptoDowload from "./components/CryptoDowload";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="bg-[#1B004E] ">
        <Header />
        <div>
          <CryptocurrencyPrices />
        </div>
      </div>

      <section>
        <CryptoPlatform />
        <CryptoDowload />
      </section>

      <Blog />
      <Contact />
      <Footer />
      {/* <div className="h-[200px]">
        <h1>okoko</h1>
      </div> */}
    </div>
  );
}

export default App;
