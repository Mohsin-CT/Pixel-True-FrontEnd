import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";

export default function CopywritingForm(props) {
  const { CopywritingForms, FormLabel, FormField, fieldset, FormBtn } =
    TWCconfig;
  return (
    <form className={CopywritingForms} action="">
      <fieldset className={fieldset}>
        <label className={FormLabel} htmlFor="">
          First name
        </label>
        <input
          className={FormField}
          type="text"
          placeholder="First name"
          name=""
          id=""
        />
      </fieldset>
      <fieldset className={fieldset}>
        <label className={FormLabel} htmlFor="">
          Last name
        </label>
        <input
          className={FormField}
          type="text"
          placeholder="Last name"
          name=""
          id=""
        />
      </fieldset>
      <fieldset className={fieldset}>
        <label className={FormLabel} htmlFor="">
          Email
        </label>
        <input
          className={FormField}
          type="text"
          placeholder="Email"
          name=""
          id=""
        />
      </fieldset>

      <a>
        <button className={FormBtn}>START LEARNING</button>
      </a>
    </form>
  );
}
