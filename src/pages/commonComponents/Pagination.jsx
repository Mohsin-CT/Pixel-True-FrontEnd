import React from "react";

const Pagination = () => {
  return (
    <ul className="inline-flex -space-x-px">
      <li>
        <a
          href="#"
          className="py-2 px-10 ml-0 leading-tight text-white bg-orange-850 rounded-full text-[20px] font-[700]"
        >
          Prev
        </a>
      </li>
      <li>
        <a
          href="#"
          className="py-2 px-3 leading-tight text-orange-850 text-[20px] font-[700]"
        >
          1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="py-2 px-3 leading-tight text-orange-850 text-[20px] font-[700]"
        >
          2
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          className="py-2 px-3 text-orange-850 text-[20px] font-[700]"
        >
          3
        </a>
      </li>
      <li>
        <a
          href="#"
          className="py-2 px-3 leading-tight text-orange-850 text-[20px] font-[700]"
        >
          4
        </a>
      </li>
      <li>
        <a
          href="#"
          className="py-2 px-3 leading-tight text-orange-850 text-[20px] font-[700]"
        >
          5
        </a>
      </li>
      <li>
        <a
          href="#"
          className="py-2 px-10 leading-tight text-white bg-orange-850 rounded-full text-[20px] font-[700]"
        >
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
