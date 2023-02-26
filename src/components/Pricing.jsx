import { feedback } from "../constants";
import styles from "../style";
import PricingCard from "./PricingCard";

const Pricing = () => (
  <section id="pricing" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={` text-center ${styles.heading2}`}>
        Pricing System.
      </h2>
      
    </div>

    <div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <PricingCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Pricing;