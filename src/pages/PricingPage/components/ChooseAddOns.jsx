import React from "react";
import TWCconfig from "../../../TWCconfig.json";
import AddOnsicon1 from "../../../images/PricingPage/AddOns-icon1.svg";
import AddOnsicon2 from "../../../images/PricingPage/AddOns-icon2.svg";
import AddOnsicon3 from "../../../images/PricingPage/AddOns-icon3.svg";
import AddOnsicon4 from "../../../images/PricingPage/AddOns-icon4.svg";

const ChooseAddOns = () => {
  const {
    ChooseAddOnsContainer,
    ChooseAddOnsContainerInner,
    ChooseAddOnsTitle,
    ChooseAddOnsBox,
    ChooseAddOnsBox2,
    ChooseAddOnsBoxTitle,
    ChooseAddOnsBoxGroup
  } = TWCconfig;

  return (
    <div className={ChooseAddOnsContainer}>
      <div className={ChooseAddOnsContainerInner}>
        <h2 className={ChooseAddOnsTitle}>Choose Your ADD-ONS</h2>
        <div className={ChooseAddOnsBoxGroup}>
          <div className={ChooseAddOnsBox}>
            <img src={AddOnsicon1} alt="" />
            <h4 className={ChooseAddOnsBoxTitle}>Competitor Research <span className="text-orange-850">$299</span> </h4>
          </div>
          <div className={ChooseAddOnsBox2}>
            <img src={AddOnsicon2} alt="" />
            <h4 className={ChooseAddOnsBoxTitle}>4,000 Extra Words <span className="text-orange-850">$299</span> </h4>
          </div>
        </div>
        <div className={ChooseAddOnsBoxGroup}>
          <div className={ChooseAddOnsBox}>
            <img src={AddOnsicon3} alt="" />
            <h4 className={ChooseAddOnsBoxTitle}>Long-term Content Planning <span className="text-orange-850">$299</span> </h4>
          </div>
          <div className={ChooseAddOnsBox2}>
            <img src={AddOnsicon4} alt="" />
            <h4 className={ChooseAddOnsBoxTitle}>Surfer Optimization <span className="text-orange-850">$299</span> </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAddOns;
