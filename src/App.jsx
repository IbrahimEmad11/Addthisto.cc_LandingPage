import styles from "./style";
import Hero from "./components/hero";
import Features from "./components/Features";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";


const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

      <Features/>
      <Works/>
      <Pricing/>
      <CTA/>
      <Footer/>
        {/* Other Components: Pricing*/}

      </div>
    </div>
  </div>
);

export default App;