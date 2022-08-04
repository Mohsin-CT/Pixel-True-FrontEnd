import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";

export default function AlternativesTable(props) {
  const { AlternativesMainTable } = TWCconfig;
  return (
    <table className={AlternativesMainTable}>
      <tbody>
        <tr>
          <th className="w-[365px] lg:w-[480px]" width="480"></th>
          <th className="w-[250px] lg:w-[365px]" width="365">
            Agency
          </th>
          <th className="w-[250px] lg:w-[365px]" width="365">
            Freelancers
          </th>
          <th className="w-[250px] lg:w-[365px]" width="365">
            Our Team
          </th>
        </tr>
        <tr>
          <th>Trunaround Time</th>
          <td>7+ Days</td>
          <td>3+ Days</td>
          <td>24-48 Hours</td>
        </tr>
        <tr>
          <th>North American Writers</th>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L18 18M2 18L18 2L2 18Z"
                stroke="#EA5728"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th>Pre-Vetted Designers</th>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L18 18M2 18L18 2L2 18Z"
                stroke="#EA5728"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
        </tr>

        <tr>
          <th>Dedicated Project Manager</th>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L18 18M2 18L18 2L2 18Z"
                stroke="#EA5728"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
        </tr>

        <tr>
          <th>Industry Experienced Editor</th>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L18 18M2 18L18 2L2 18Z"
                stroke="#EA5728"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
        </tr>

        <tr>
          <th>Keyword Research & Selection</th>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L18 18M2 18L18 2L2 18Z"
                stroke="#EA5728"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td>
            <svg
              className="m-auto"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67188 10.332L8.00521 15.6654L21.3385 2.33203"
                stroke="#6CC6B0"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th>Average Cost Per Month</th>
          <td>$5,000+</td>
          <td>$250+*</td>
          <td>$1,100+</td>
        </tr>
      </tbody>
    </table>
  );
}
