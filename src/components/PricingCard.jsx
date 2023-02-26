import { correct } from "../assets";
import styles from "../style";

const PricingCard = ({content,header,subheader, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border shadow">
    <img src={correct} alt="correct mark" className="w-[48px] h-[48px] object-contain" />
    <h2 className={`${styles.heading2}`} >{header}</h2>
    <h4 className="font-poppins font-normal text-[25px] leading-[24px] text-white">{subheader}</h4>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    {/* <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-grey">
          {title}
        </p>
      </div>
    </div> */}
  </div>
);


export default PricingCard;