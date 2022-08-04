import { Disclosure } from '@headlessui/react'
import React from "react";
import TWCconfig from "../../../TWCconfig.json";

const FAQ = () => {
  const {
    FaqContainer
  } = TWCconfig;

  return (
    <div className={FaqContainer}>
        <Disclosure>
            <Disclosure.Button className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-poppin-semibold flex justify-between w-full py-[15px] md:py-[25px] accordionBtn text-left">
            What are the turnaround times?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-[20px] font-Manjari-400 text-left border-b border-white w-full pb-4">
            We operate on a standard monthly basis with our services. However, please let us know your expected turnaround time for custom orders and we will do our best to meet those goals.
            </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
            <Disclosure.Button className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-poppin-semibold flex justify-between border-t border-white w-full py-[15px] md:py-[25px] accordionBtn text-left">
            Do you offer refunds?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-[20px] font-Manjari-400 text-left border-b border-white w-full pb-4">
            Because we offer digital services, we cannot offer refunds. However, we do offer revisions for each order.
            </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
            <Disclosure.Button className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-poppin-semibold flex justify-between border-t border-white w-full py-[15px] md:py-[25px] accordionBtn text-left">
            Is my work outsourced?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-[20px] font-Manjari-400 text-left w-full pb-4">
            Nope! All of your work will be done in-house by our staff. We pride ourselves on completing all projects with our excellent staff and never sending client work elsewhere.
            </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
            <Disclosure.Button className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-poppin-semibold flex justify-between border-t border-white w-full py-[15px] md:py-[25px] accordionBtn text-left">
            What payment options are available?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-[20px] font-Manjari-400 text-left w-full pb-4">
            Nope! All of your work will be done in-house by our staff. We pride ourselves on completing all projects with our excellent staff and never sending client work elsewhere.
            </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
            <Disclosure.Button className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-poppin-semibold flex justify-between border-t border-white w-full py-[15px] md:py-[25px] accordionBtn text-left">
            Do you just provide articles?
            </Disclosure.Button>
            <Disclosure.Panel className="text-white text-[20px] font-Manjari-400 text-left w-full pb-4">
            No, our writers are capable of creating web copy, e-books, brochures, and much more.
            </Disclosure.Panel>
            </Disclosure>
    </div>
  );
};

export default FAQ;
