import React from "react";
import TWCconfig from "../../TWCconfig.json";
const Pagination = () => {
  const { PaginationContainer, PaginationBtn, PaginationItemActive, PaginationItem } = TWCconfig;
  return (
    <div className={PaginationContainer}>
          <button className={PaginationBtn}>Prev</button>
          <ul className="flex justify-center items-center space-x-[5px] md:space-x-[10px] text-[16px] md:text-[18px] lg:text-[20px] text-orange-850 font-poppin-bold">
            <li> <a className={PaginationItemActive} href="#">1</a> </li>
            <li> <a className={PaginationItem} href="#">2</a> </li>
            <li> <a className={PaginationItem} href="#">3</a> </li>
            <li> <a className={PaginationItem} href="#">4</a> </li>
            <li>...</li>
            <li> <a className={PaginationItem} href="#">6</a> </li>
          </ul>
          <button className={PaginationBtn}>Next</button>
        </div>
  );
};

export default Pagination;
