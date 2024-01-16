import { affiliateHighlights } from "../constants";
import styles from '../style';
import { buyNow, discount, robot } from '../assets';


const AffiliateHighlights = () => (

  // <section className={`${styles.flexCenter} flex-row flex-wrap gap-4 sm:mb-20 mb-6`}>

  <section className={`${styles.flexCenter} flex-row flex-wrap gap-4 sm:mb-20 mb-6`}>
           {/* className="metrics" */}

    {affiliateHighlights.map((affiliateHighlight) => (

      <div 
        key={affiliateHighlight.id} 
        // className={`flex-1 flex justify-start items-center flex-row m-3`}
        className={`flex flex-row items-center py-[8px] px-4 rounded-[10px] mb-2
                    w-[380px] h-11 font-rethinksans
                    // affiliates
                    ${affiliateHighlight.color}`}
      >
        <div className="py-[1px] px-2 rounded-[10px] background:rgba(255, 255, 255, 0.10);">

          <span className="text-white">{affiliateHighlight.id}</span> {" "}

        </div>

        <img src={affiliateHighlight.icon} alt="discount"
          className="w-[24px] h-[24px]" />
        {/* <h4
          className="font-poppins font-semibold xs:text-[40px] text-[30px]
                    xs:leading-[53px] leading-[43px]"
        >{affiliateHighlight.value}</h4>
        <p
          className="font-poppins font-normal xs:text-[20px] text-[15px]
                    xs:leading-[26px] leading-[21px] text-gradient 
                    uppercase m-3"
        >{affiliateHighlight.title}</p> */}

        <p className={`${styles.paragraph} ml-2 leading-[24px]`}>

        {/* For space after span, put following text on same line */}

          

          <span className="text-white text-[16px] leading-[24px] font-medium">{affiliateHighlight.title}</span> {" "}

          <span className="text-white text-[16px] px-2 font-normal">{affiliateHighlight.value}</span> {" "}


        </p>

        <div className="flex flex-row items-center py-[1px] px-2 rounded-[10px] bg-[#1E1F20]
                        h-7 ml-auto cursor-pointer">

          <span className="text-white text-[14px]">
            Buy Now
          </span> {" "}

          <img src={buyNow} alt="buy now"
          className="w-[16px] h-[16px]" />

        </div>

      </div>

    ))}

  </section>  

)

export default AffiliateHighlights