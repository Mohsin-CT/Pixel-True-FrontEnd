import React from "react";
import TWCconfig from "../../../TWCconfig.json";

const GetStarted = () => {
  const {
    GetStartedFormContainer,
    GetStartedForm,
    GetStartedField,
    GetStartedBtnForm,
    CustomCheckbox
  } = TWCconfig;

  return (
    <div className={GetStartedFormContainer}>
        <div className={GetStartedForm}>
            <input className={GetStartedField} type="text" placeholder="Email" />
            <button className={GetStartedBtnForm}>GET STARTED</button>
        </div>
        <ul className={CustomCheckbox}>
            <li>
                <input className="hidden" id="Guarantee" type="checkbox" />
                <label htmlFor="Guarantee">7 Day Guarantee</label>
            </li>
            <li>
                <input className="hidden" id="Anytime" type="checkbox" />
                <label htmlFor="Anytime">Cancel Anytime</label>
            </li>
        </ul>
    </div>
  );
};

export default GetStarted;
